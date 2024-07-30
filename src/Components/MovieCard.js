import React from "react";
import { TMDB_CDN_IMG_URL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[170px] mr-2 rounded-lg">
      <img src={TMDB_CDN_IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
