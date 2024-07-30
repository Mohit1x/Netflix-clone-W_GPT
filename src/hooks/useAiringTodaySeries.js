import { useDispatch } from "react-redux";
import { addAiringTodaySeries } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";

const useAiringTodaySeries = () => {
  const dispatch = useDispatch();
  const getAiringTodaySeries = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addAiringTodaySeries(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAiringTodaySeries();
  }, []);
};

export default useAiringTodaySeries;
