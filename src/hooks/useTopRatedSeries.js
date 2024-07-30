import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { addtopRatedSeries } from "../utils/MoviesSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const getTopRatedSeries = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addtopRatedSeries(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
