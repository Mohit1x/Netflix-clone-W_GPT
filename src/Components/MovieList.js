import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className=" p-2 px-12">
      <h1 className="text-gray-400 py-4 text-xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
