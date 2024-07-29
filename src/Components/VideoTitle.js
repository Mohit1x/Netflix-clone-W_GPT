import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-full pt-[15%] absolute text-white bg-gradient-to-r from-black px-5">
      <p className=" text-4xl font-bold">{title}</p>
      <p className="py-6 text-[0.95rem] font-semibold w-1/3">{overview}</p>
      <div className="py-6">
        <button className="bg-white hover:bg-gray-300 hover:text-gray-900 py-2 px-12 font-bold text-gray-800 rounded-md">
          ▷ Play
        </button>
        <button className="bg-gray-500 hover:bg-gray-500 hover:bg-opacity-50 hover:text-black py-2 px-10 mx-2 font-bold text-black rounded-md bg-opacity-40">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
