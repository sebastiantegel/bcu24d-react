import { useState } from "react";
import { getMovies } from "../services/movieService";
import { Link } from "react-router";

export const Movies = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies") || "[]"),
  );

  const handleSearch = async (e) => {
    e.preventDefault();

    const movies = await getMovies(searchText);
    setMovies(movies);
    setSearchText("");

    localStorage.setItem("movies", JSON.stringify(movies));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Sök</button>
      </form>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="movie">
              <h3>{movie.Title}</h3>
              <div className="img-container">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <Link to={"/movie/" + movie.imdbID}>Läs mer</Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};
