const BASE_URL = "http://omdbapi.com?apikey=416ed51a&";

export const getMovies = async (searchText) => {
  const response = await fetch(`${BASE_URL}s=${searchText}`);
  const data = await response.json();
  return data.Search;
};

export const getMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}i=${id}`);
  const data = await response.json();
  return data;
};
