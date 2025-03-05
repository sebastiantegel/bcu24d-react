import { useEffect, useState } from "react";

export const Omdb = () => {
  const [movies, setMovies] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (hasFetched) return;

    const getData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star",
      );
      const data = await response.json();
      setMovies(data.Search);
      setHasFetched(true);
    };

    getData();
  });

  return (
    <div className="movies">
      {movies.map((m) => {
        return (
          <div key={m.imdbID} className="movie">
            <h2>{m.Title}</h2>
            <div>
              <img src={m.Poster} alt={m.Title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
