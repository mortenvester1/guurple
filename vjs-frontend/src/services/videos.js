import axios from "axios";
import { get, post, del, put } from "./default.requests";

const BACKENDURL = "http://localhost:8080"
const getVideos = urlParams => {
  console.log("[videos.service] getVideos");
  get(BACKENDURL, "api/videos", urlParams)
};

export default getVideos;
