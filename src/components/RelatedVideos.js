import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const RelatedVideos = ({ video }) => {
  const { thumbnails, title, channelTitle, publishedAt } = video?.snippet;

  // console.log("RelatedVideos rendered");
  return (
    <Link
      to={"/watch?v=" + video?.id?.videoId}
      key={video?.id?.videoId}
      className="mb-[10px] lg:flex gap-[10px] items-start"
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="rounded-lg lg:w-[168px]"
      />
      <section className=" my-1">
        <h4 className="mb-2 text-sm font-semibold line-clamp-2">{title}</h4>
        <p className="text-xs mb-[2px] text-gray-600">{channelTitle}</p>
        <p className="text-xs text-gray-600">{moment(publishedAt).fromNow()}</p>
      </section>
    </Link>
  );
};

export default RelatedVideos;
