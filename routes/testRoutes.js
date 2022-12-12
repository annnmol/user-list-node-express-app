const express = require("express");
const testRouter = express.Router();

testRouter.route("/").get((req, res) => {
  return res.status(200).json({ message: "Hey homepage" });
});

module.exports = testRouter;