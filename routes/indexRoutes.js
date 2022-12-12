const express = require("express");
const router = express.Router();
const testRouter = require("./testRoutes");
const userRouter = require("./userRoutes");

// split up route handling
router.use("/users", userRouter);
router.use("/test", testRouter);
router.use("/", (req, res) => {
    return res.send(200).json({message:'Visit path /users to test it'})
});

module.exports = router;
