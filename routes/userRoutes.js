const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  putUser,
  deleteUser,
  postUser,
} = require("../controllers/userController");

router.route("").get(getAllUsers);

router.route("/:id").get(getUser);

router.route("/:id").put(putUser);

router.route("/:id").delete(deleteUser);

router.route("").post(postUser);

module.exports = router;
