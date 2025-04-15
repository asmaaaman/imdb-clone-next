import Image from "next/image";
import React from "react";

const API_KEY = process.env.API_KEY;
const MovieDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data ");
  }
  const movie = await res.json();

  return (
    <div className="w-full">
      <div
        className="p-4 md:pt-8 flex 
      flex-col md:flex-row content-between ml-2
       "
      >
        <Image
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg"
          width={500}
          height={300}
          alt="image"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3">{movie.overview}</p>

          <p>
            <span className="font-semibold mr-1">Dating Released :</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className="mb-3 font-semibold mr-1">Rating :</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
