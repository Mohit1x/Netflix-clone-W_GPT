import { useDispatch } from "react-redux";
import { addMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNOwPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNOwPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
