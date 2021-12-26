import { baseService } from "./default.requests";

const videoService = {
  getVideoUrl: function(videoId) {
    console.log("[videoService] getVideo");
    return baseService.formUrl(`/video/${videoId}`)
  },
  getVideoThumbnailUrl: function(videoId) {
    console.log("[videoService] getVideoThumbnail");
    let url = baseService.formUrl(`/video/${videoId}/thumbnail`)
    console.log(url)
    return url
  },
  getVideoLib: async function(rootDir) {
    console.log("[videoService] getVideoLib")
    return await baseService.get(`/videolib`)
  }
}

export default videoService;
