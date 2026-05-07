const express = require("express");

const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  exportUsersCSV,
} = require("../controllers/userController");

const router = express.Router();


// ==========================================
// CREATE USER
// GET USERS WITH SEARCH + PAGINATION
// ==========================================
router.route("/")
  .post(createUser)
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
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;