import { useState } from "react";

export const SearchMovie = () => {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies") || "[]"),
  );
  const [searchText, setSearchText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fetch
    const response = await fetch(
      `https://omdbapi.com/?apikey=416ed51a&s=${searchText}`,
    );
    const data = await response.json();

    // setMovies
    setMovies(data.Search);
    setSearchText("");
    localStorage.setItem("movies", JSON.stringify(data.Search));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Sök</button>
      </form>

      <div className="movies">
        {movies.map((m) => {
          return (
            <div id={m.imdbID}>
              <h3>{m.Title}</h3>
              <div>
                <img src={m.Poster} alt={m.Title} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
