import axios from 'axios';

const parametersRequest = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: 'fd540b86f52e72bb99bdb9bba11ffc9d',
};
const { BASE_URL, API_KEY } = parametersRequest;

axios.defaults.baseURL = BASE_URL;
axios.defaults.method = 'GET';
axios.defaults.params = { api_key: API_KEY };

export const fetchMovies = async (path, controller) => {
  const resp = await axios(path, {
    signal: controller.signal,
  });

  return resp.data;
};

export const fetchMovieDetails = async (
  movieId,
  urlParameter = '',
  controller
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

export const fetchDetails = async controller => {
  const resp = await axios('/configuration', {
    signal: controller.signal,
  });

  return resp.data;
};
