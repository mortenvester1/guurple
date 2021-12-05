// Implement available routes
const Videos = require("../components/videos");
const VideosRouter = require("express").Router({ mergeParams: true });
const validator = require("express-joi-validation").createValidator({ passError: true });
const { videoId } = require("../req-schemas/videos");

VideosRouter.get("/:videoId", validator.params(videoId), async (req, res) => {
  console.log("[api/videos] some api call");
  return res.json(await Videos.readVideos({ ...req.params, ...req.body }));
});

module.exports = VideosRouter;
