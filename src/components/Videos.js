import React, { useEffect, useState } from "react";
import Video from "./Video";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //api call
    getVideos();
  }, []);

  async function getVideos() {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const data = await response.json();
    console.log(data);
    setVideos(data?.items);
  }
  return (
    <section className="flex flex-wrap gap-5">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
};

export default Videos;
