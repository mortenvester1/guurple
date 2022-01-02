// Implement available routes
const Video = require("../components/video");
const VideoRouter = require("express").Router({ mergeParams: true });
const validator = require("express-joi-validation").createValidator({ passError: true });
const { videoId } = require("../req-schemas/video");

VideoRouter.get("/:videoId", validator.params(videoId), function(req, res) {
  console.log("[api/video] get")
  return Video.readVideo(req, res)
});

VideoRouter.get("/:videoId/metadata", validator.params(videoId), async (req, res) => {
  console.log("[api/video/metadata] get")
  return await Video.readVideoMetadata(req, res)
});

VideoRouter.get("/:videoId/thumbnail", validator.params(videoId), async (req, res) => {
  console.log("[api/video/thumbnail] get")
  return await Video.readVideoThumbnail(req, res)
});

module.exports = VideoRouter;
