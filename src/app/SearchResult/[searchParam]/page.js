import MoviesCard from "@/app/components/MoviesList";
import React from "react";

const SearchParam = async ({ params }) => {
  const { searchParam } = params;
  console.log("searchParam ", searchParam);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchParam}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && <p>No Data to fetch</p>}
      {results && results.length > 0 && <MoviesCard results={results} />}
    </div>
  );
};

export default SearchParam;
