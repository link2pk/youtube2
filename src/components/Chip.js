import React, { useEffect } from "react";
import { YOUTUBE_API_BASE_URL } from "../utils/constants";

const Chip = ({ info }) => {
  //   console.log(info);
  const { title } = info?.snippet;

  return (
    <button className="text-sm bg-gray-100 transition hover:bg-gray-300 px-4 py-2 rounded-lg whitespace-nowrap">
      {title}
    </button>
  );
};

export default Chip;
