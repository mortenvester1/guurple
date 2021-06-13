// Implement backend router
const express = require("express");
const VjsRouter = express.Router();
//const Security = require("../../utils/security");

//VjsRouter.use("/videos", Security.userAuth, require("./videos"));
VjsRouter.use("/videos", require("./videos"));
VjsRouter.use("/video", require("./video"));

module.exports = VjsRouter;
