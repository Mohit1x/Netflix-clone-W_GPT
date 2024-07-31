import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpComingMovies";
import useAiringTodaySeries from "../hooks/useAiringTodaySeries";
import useOnAirSeries from "../hooks/useOnAirSeries";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptsearch.showGpt);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodaySeries();
  useOnAirSeries();
  usePopularSeries();
  useTopRatedSeries();
  return (
    <div className="h-full">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
