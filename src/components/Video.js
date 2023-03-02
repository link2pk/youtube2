import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { YOUTUBE_API_BASE_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Video = ({ video }) => {
  const { thumbnails, title, channelTitle, channelId, publishedAt } =
    video?.snippet;
  const { viewCount } = video?.statistics;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    getChannels();
  }, []);

  async function getChannels() {
    // console.log("getChannels called");
    const response = await fetch(
      YOUTUBE_API_BASE_URL +
        "/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        channelId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const data = await response.json();
    // console.log(data.items[0]);
    setChannel(data.items[0]);
  }
  return (
    <>
      {/* {console.log(channel?.snippet?.thumbnails)} */}
      <Link
        to="/watch?v="
        className={"my-2  " + (isMenuOpen ? "max-w-[250px]" : "max-w-[320px]")}
      >
        <img src={thumbnails.medium.url} alt={title} className="rounded-xl" />
        <section className="grid grid-cols-[36px_1fr] gap-3 my-3">
          <img
            src={channel?.snippet?.thumbnails?.default?.url}
            alt={title}
            className="w-[36px] h-[36px] rounded-full  "
          />
          <div>
            <h4 className="text-sm font-semibold line-clamp-2">{title}</h4>
            <p className="text-xs text-gray-600">{channelTitle}</p>
            <p className="text-xs text-gray-600">
              {viewCount.length > 3 &&
                viewCount.length < 7 &&
                viewCount.slice(0, -3) + "K views"}
              {viewCount.length > 6 &&
                (viewCount.slice(0, -5) / 10).toFixed(1) + "M views"}
              {viewCount.length < 4 && viewCount}

              {" • " + moment(publishedAt).fromNow()}
            </p>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Video;
