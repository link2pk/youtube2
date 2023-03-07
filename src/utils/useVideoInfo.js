import { useState, useEffect } from "react";
import { YOUTUBE_API_BASE_URL } from "./constants";

const useVideoInfo = (videoId) => {
  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    async function getVideoInfo() {
      const response = await fetch(
        YOUTUBE_API_BASE_URL +
          "/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
          videoId +
          "&key=" +
          process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const data = await response.json();
      // console.log(data);
      setVideoInfo(data?.items[0]);
    }
    getVideoInfo();
  }, [videoId]);

  return videoInfo;
};

export default useVideoInfo;
