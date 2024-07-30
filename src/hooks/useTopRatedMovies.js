import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { addtopRatedMovies } from "../utils/MoviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=3",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addtopRatedMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
