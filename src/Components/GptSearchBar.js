import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.gptsearch.lang);
  return (
    <div className="pt-[12%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12 bg-opacity-20">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-2 m-2 col-span-9"
        />
        <button className=" col-span-3 px-4 py-2 m-2 rounded-md text-white hover:bg-red-700 bg-red-600">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
