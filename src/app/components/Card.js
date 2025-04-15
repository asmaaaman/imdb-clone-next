import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlLike } from "react-icons/sl";

const Card = ({ result }) => {
  return (
    <div
      className="group cursor-pointer sm:hover-shadow-slate-400 sm:shadow-md
       rounded-lg sm:border sm:border-slate-400 
    sm:m-2 transition-shadow duration-200"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          className="rounded-2xl group-hover:opacity-75 transition-opacity duration-300 mx-auto p-3 w-[20rem] h-[20rem]"
          width={500}
          height={300}
          alt="movie"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_bath || result.poster_path
          }`}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <div className="flex items-center gap-1">
            <SlLike className="h-5 mr-1 ml-3" />

            <p className="mr-3">{result.date || result.release_date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
