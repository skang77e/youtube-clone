import axios from "axios";
const KEY = "AIzaSyAnmy06BgbFxr_rtsA1xayyRECO9eGwqv4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
