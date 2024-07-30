import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return <p>loading...</p>;
  return (
    <div className="bg-black">
      <div className="-mt-[160px] relative z-20">
        <MovieList title={"TopRated Series"} movies={movies.topRatedSeries} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Series"} movies={movies.popularSeries} />
        <MovieList
          title={"AiringToday Series"}
          movies={movies.airingTodaySeries}
        />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
        <MovieList title={"OnAir series"} movies={movies.onAirSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
