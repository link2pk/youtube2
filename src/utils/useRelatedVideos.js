import { useState, useEffect } from "react";
import { YOUTUBE_API_BASE_URL } from "./constants";

const useRelatedVideos = (videoId) => {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    async function getRelated() {
      const response = await fetch(
        YOUTUBE_API_BASE_URL +
          "/search?part=snippet&relatedToVideoId=" +
          videoId +
          "&type=video&maxResults=20&key=" +
          process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const data = await response.json();
      setRelated(data?.items);
      // console.log(data?.items[0]);
    }
    getRelated();
  }, [videoId]);

  return related;
};
export default useRelatedVideos;
