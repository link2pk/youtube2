import React from "react";
import { Link } from "react-router-dom";
import YoutubeLogo from "../assets/img/yt-logo.svg";
import UserPic from "../assets/img/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const menuClickHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="fixed z-10 bg-white w-full flex min-h-[56px] items-center justify-between sm:grid sm:grid-cols-[160px_1fr_160px]">
      <div className="flex">
        <button className="sm:mx-1 md:mx-4" onClick={() => menuClickHandler()}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            style={{
              pointerEvents: "none",
              display: "block",
            }}
            className="w-9 p-1"
          >
            <g>
              <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
            </g>
          </svg>
        </button>
        <Link to="/" className="hidden sm:block  sm:overflow-hidden sm:py-2">
          <img
            className="h-6 sm:w-[initial]"
            src={YoutubeLogo}
            alt="youtube logo"
          />
        </Link>
      </div>
      <div className="flex mx-2   sm:justify-self-center sm:w-full sm:max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 h-10 w-full px-4 rounded-l-full shadow-inner"
        />
        <button className="h-10 border border-gray-300 rounded-r-full bg-[#f8f8f8]">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon w-9 p-2"
            style={{
              pointerEvents: "none",
              display: "block",
            }}
          >
            <g>
              <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
            </g>
          </svg>
        </button>
      </div>
      <button className="h-8 w-8 mr-2  rounded-full overflow-hidden bg-transparent sm:justify-self-end ">
        <img
          src={UserPic}
          alt="user pic"
          className="w-full h-full object-cover"
        />
      </button>
    </header>
  );
};

export default Header;
