import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import useChannel from "../utils/useChannel";

const Video = ({ video }) => {
  const channel = useChannel(video?.snippet?.channelId);
  const { thumbnails, title, channelTitle, publishedAt } = video?.snippet;
  const { viewCount } = video?.statistics;
  return (
    <>
      {/* {console.log(channel?.snippet?.thumbnails)} */}
      <Link to={"/watch?v=" + video?.id} className="my-2">
        <img src={thumbnails.medium.url} alt={title} className="rounded-xl" />
        <section className="flex gap-3 my-3">
          {channel && (
            <img
              src={channel?.snippet?.thumbnails?.default?.url}
              alt={title}
              className="w-[36px] h-[36px] rounded-full  "
            />
          )}

          <div>
            <h4 className="text-sm font-semibold line-clamp-2">{title}</h4>
            <p className="text-xs text-gray-600">{channelTitle}</p>
            <p className="text-xs text-gray-600">
              {viewCount?.length > 3 &&
                viewCount?.length < 7 &&
                viewCount?.slice(0, -3) + "K views"}
              {viewCount?.length > 6 &&
                (viewCount?.slice(0, -5) / 10).toFixed(1) + "M views"}
              {viewCount?.length < 4 && viewCount}

              {" • " + moment(publishedAt).fromNow()}
            </p>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Video;
