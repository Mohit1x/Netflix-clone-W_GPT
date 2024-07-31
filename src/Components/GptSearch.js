import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { GPT_BG_IMG } from "../utils/Constant";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img className="w-screen" src={GPT_BG_IMG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
