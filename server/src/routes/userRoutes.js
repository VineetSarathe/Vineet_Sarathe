const express = require("express");

const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  exportUsersCSV,
} = require("../controllers/userController");

const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();


// ==========================================
// CREATE USER
// GET USERS WITH SEARCH + PAGINATION
// ==========================================
router.route("/")
  .post(
    upload.single("profileImage"),
    createUser
  )
  .get(getUsers);


// ==========================================
// EXPORT USERS CSV
// ==========================================
router.get("/export/csv", exportUsersCSV);


// ==========================================
// GET SINGLE USER
// UPDATE USER
// DELETE USER
// ==========================================
router.route("/:id")
  .get(getSingleUser)
  .put(
    upload.single("profileImage"),
    updateUser
  )
  .delete(deleteUser);


 
module.exports = router;