import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
const Video = ({ video }) => {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;
  return (
    <Link to="/watch?v=" className="my-4 max-w-[320px] ">
      <img src={thumbnails.medium.url} alt={title} className="rounded-xl" />
      <section className="grid grid-cols-[36px_1fr] gap-3 my-3">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-[36px] h-[36px] rounded-full object-cover object-left-bottom"
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
  );
};

export default Video;
