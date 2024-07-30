import { useDispatch } from "react-redux";
import { addOnAirSeries } from "../utils/MoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";

const useOnAirSeries = () => {
  const dispatch = useDispatch();
  const getOnAirSeries = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addOnAirSeries(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOnAirSeries();
  }, []);
};

export default useOnAirSeries;
