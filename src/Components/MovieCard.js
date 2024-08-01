import React from "react";
import { TMDB_CDN_IMG_URL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[100px] md:w-[170px] mr-2 ">
      <img className="rounded-sm" src={TMDB_CDN_IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
