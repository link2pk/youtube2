import React from "react";

const WatchVideoInfo = ({ videoInfo }) => {
  const { description, title, channelTitle } = videoInfo?.snippet || {};
  //   const { viewCount } = videoInfo?.statistics;
  return (
    <>
      <section className="">
        <h1 className="font-semibold text-xl mb-2">{title}</h1>

        <section>
          <h4 className="font-semibold text-lg">{channelTitle}</h4>
        </section>

        <div className="whitespace-pre-wrap bg-gray-100 rounded-xl p-4">
          {description}
        </div>
      </section>
    </>
  );
};

export default WatchVideoInfo;
