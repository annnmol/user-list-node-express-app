const express = require("express");
const router = express.Router();
const testRouter = require("./testRoutes");
const userRouter = require("./userRoutes");

// split up route handling
router.use("/users", userRouter);
router.use("/test", testRouter);

module.exports = router;
