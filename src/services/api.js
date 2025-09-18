import axios from 'axios';

const parametersRequest = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: 'fd540b86f52e72bb99bdb9bba11ffc9d',
};

axios.defaults.baseURL = parametersRequest.BASE_URL;
axios.defaults.method = 'GET';
axios.defaults.params = { api_key: parametersRequest.API_KEY };

export const fetchMovies = async (path, controller) => {
  const resp = await axios(path, {
    signal: controller.signal,
  });

  return resp.data;
};

export const fetchDetailsMovieById = async (
  movieId,
  controller,
  urlParameter = ''
) => {
  const resp = await axios(`/movie/${movieId}${urlParameter}`, {
    signal: controller.signal,
  });

  return resp.data;
};

export const fetchMovieByQuery = async (query, controller) => {
  const resp = await axios(`/search/movie?query=${query}`, {
    signal: controller.signal,
  });

  return resp.data;
};

export const fetchMovieGenreList = async () => {
  const resp = await axios('genre/movie/list');

  return resp.data;
};

export const fetchMoviesByGenre = async (genre, controller) => {
  const resp = await axios(`/discover/movie?with_genres=${genre}`, {
    signal: controller.signal,
  });

  return resp.data;
};
