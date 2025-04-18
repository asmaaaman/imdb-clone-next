import MoviesList from "./components/MoviesList";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "top-rated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data ");
  }
  const results = data.results;
  return (
    <div>
      <MoviesList results={results} />
    </div>
  );
}
