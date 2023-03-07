import React from "react";

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
