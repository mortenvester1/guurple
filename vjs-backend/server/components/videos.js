// Implement backend logic
const VideosDAO = require("../../DAO/Videos");

const Videos = {
  readVideo: async ({ video_id }) => {
    console.log("[components/videos] readVideo");
    return await VideosDAO.readVideos({ video_id });
  },
}

module.exports = Videos;
