// Implement available routes
const Video = require("../components/video");
const VideoRouter = require("express").Router({ mergeParams: true });
const validator = require("express-joi-validation").createValidator({ passError: true });
const { video_id } = require("../req-schemas/video");

VideoRouter.get("/:video_id", validator.params(video_id), function(req, res) {
  console.log("[api/video] get")
  // console.log("[api/video] req.params", req.params)
  // console.log("[api/video] req.body", req.body)
  // console.log("[api/video] req.headers", req.headers)
  return Video.readVideo(req, res)
});

VideoRouter.get("/:video_id/metadata", validator.params(video_id), async (req, res) => {
  console.log("[api/video/metadata] get")
  // console.log("[api/video/metadata] req.params", req.params)
  // console.log("[api/video/metadata] req.body", req.body)
  // console.log("[api/video/metadata] req.headers", req.headers)
  return await Video.readVideoMetadata(req, res)
});

VideoRouter.get("/:video_id/thumbnail", validator.params(video_id), async (req, res) => {
  console.log("[api/video/thumbnail] get")
  // console.log("[api/video/thumbnail] req.params", req.params)
  // console.log("[api/video/thumbnail] req.body", req.body)
  // console.log("[api/video/thumbnail] req.headers", req.headers)
  return await Video.readVideoThumbnail(req, res)
});

module.exports = VideoRouter;
