import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="h-full">
      <Header />
      <MainContainer />
      <MovieContainer />
    </div>
  );
};

export default Browse;
