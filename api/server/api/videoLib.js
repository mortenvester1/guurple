// Implement available routes
const VideoLib = require("../components/videoLib");
const VideoLibRouter = require("express").Router({ mergeParams: true });
const validator = require("express-joi-validation").createValidator({ passError: true });
const { videoId } = require("../req-schemas/videoLib");

VideoLibRouter.get("/", async (req, res) => {
  console.log("[api/videolib] get");
  return await VideoLib.readDirectory(req, res);
});

module.exports = VideoLibRouter;
