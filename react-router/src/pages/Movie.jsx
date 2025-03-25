import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById } from "../services/movieService";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await getMovieById(id);
      setMovie(movie);
    };

    getMovie();
  });

  return (
    <>
      {!movie ? (
        <>Loading...</>
      ) : (
        <>
          <h2>{movie.Title}</h2>
          <div className="img-container">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <p>{movie.Director}</p>
          <p>{movie.Plot}</p>
        </>
      )}
    </>
  );
};
