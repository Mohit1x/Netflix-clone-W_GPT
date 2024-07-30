import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/MoviesSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filteredData = json.results.filter(
        (videos) => videos.type == "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      dispatch(addTrailer(trailer.key));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    movieVideo();
  }, []);
};

export default useTrailer;
