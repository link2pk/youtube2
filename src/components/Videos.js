import React, { useEffect, useState } from "react";
import { YOUTUBE_API_BASE_URL } from "../utils/constants";
import Video from "./Video";
const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //api call
    getVideos();
  }, []);

  async function getVideos() {
    const response = await fetch(
      YOUTUBE_API_BASE_URL +
        "/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const data = await response.json();
    // console.log(data?.items);
    setVideos(data?.items);
  }

  return (
    <section className=" flex flex-wrap gap-5 videos">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
};

export default Videos;
