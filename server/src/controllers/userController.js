const User = require("../models/userModel");
const validateUser = require("../validators/userValidator");
const { Parser } = require("json2csv");
const getPagination = require("../utils/pagination");


// ==========================================
// CREATE USER
// ==========================================
const createUser = async (req, res) => {
  try {

    if (req.file) {
  req.body.profileImage =
    `/uploads/${req.file.filename}`;
}

const userData = {
  firstName: req.body.firstName || "",
  lastName: req.body.lastName || "",
  email: req.body.email || "",
  mobile: req.body.mobile || "",
  gender: req.body.gender || "",
  status: req.body.status || "",
  location: req.body.location || "",
  profileImage: req.body.profileImage || "",
};

const { isValid, errors } =
  validateUser(userData);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    const existingUser = await User.findOne({
  email: userData.email,
});

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const user = await User.create(userData);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// GET ALL USERS WITH PAGINATION + SEARCH
// ==========================================
const getUsers = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;

    const search = req.query.search || "";

    const { currentPage, perPage, skip } =
      getPagination(page, limit);

    const query = {
      $or: [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    };

    const totalUsers = await User.countDocuments(query);

    const users = await User.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(perPage);

    res.status(200).json({
      success: true,
      totalUsers,
      totalPages: Math.ceil(totalUsers / perPage),
      currentPage,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// GET SINGLE USER
// ==========================================
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// UPDATE USER
// ==========================================
const updateUser = async (req, res) => {
  try {
    const { isValid, errors } = validateUser(req.body);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// DELETE USER
// ==========================================
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// EXPORT USERS CSV
// ==========================================
const exportUsersCSV = async (req, res) => {
  try {
    const users = await User.find();

    const fields = [
      "firstName",
      "lastName",
      "email",
      "mobile",
      "gender",
      "status",
      "location",
      "profileImage",
    ];

    const formattedUsers = users.map((user) => ({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: `'${user.mobile}`,
      gender: user.gender,
      status: user.status,
      location: user.location,
      profileImage: user.profileImage,
    }));

    const json2csv = new Parser({ fields });

    const csv = json2csv.parse(formattedUsers);

    res.header("Content-Type", "text/csv");

    res.attachment("users.csv");

    return res.send(csv);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  exportUsersCSV,
};