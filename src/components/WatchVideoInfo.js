import React, { useState, useEffect } from "react";

const WatchVideoInfo = ({ videoInfo }) => {
  const { description, title, channelTitle } = videoInfo?.snippet || {};
  //   const { viewCount } = videoInfo?.statistics;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(false);
  }, [videoInfo]);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <section className="">
        <h1 className="font-semibold text-xl mb-2">{title}</h1>

        <section>
          <h4 className="font-semibold text-lg">{channelTitle}</h4>
        </section>

        <div className="bg-gray-100 rounded-xl p-4">
          <div className="whitespace-pre-wrap   line-clamp-3 cut-off-text">
            {description}
          </div>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="cb font-semibold relative top-1"
          />
        </div>
      </section>
    </>
  );
};

export default WatchVideoInfo;
