import { toast } from 'react-hot-toast';
import {
  fetchMovieByQuery,
  fetchDetailsMovieById,
  fetchMovies,
  fetchMovieGenreList,
  fetchMoviesByGenre,
} from './api';
import { defaultErrorMessage } from 'helpers/helpers';

const noMoviesMatchingErrorMessage =
  'Sorry, there are no movies matching your search query. Please try again.';

export async function getTopMovies(
  timeWindow,
  setMovies,
  setIsLoading,
  controller
) {
  setIsLoading(true);

  try {
    const data = await fetchMovies(`trending/movie/${timeWindow}`, controller);

    if (!data.results.length) {
      toast.remove();
      toast.error(noMoviesMatchingErrorMessage);

      return;
    }

    setMovies(data.results);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  } finally {
    setIsLoading(false);
  }
}

export async function getMovieByQuery(
  query,
  setMovies,
  setIsLoading,
  controller
) {
  if (!query) return;

  setIsLoading(true);

  try {
    const data = await fetchMovieByQuery(query, controller);

    if (!data.results.length) {
      setMovies([]);
      toast.remove();
      toast.error(noMoviesMatchingErrorMessage);

      return;
    }

    setMovies(data.results);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  } finally {
    setIsLoading(false);
  }
}

export async function getDetailsMovieById(
  movieId,
  setMovieDetails,
  setIsLoading,
  controller
) {
  setIsLoading(true);

  try {
    const data = await fetchDetailsMovieById(movieId, controller);

    setMovieDetails(data);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  } finally {
    setIsLoading(false);
  }
}

export async function getCastMovieById(
  movieId,
  setMovieCast,
  setIsLoading,
  controller
) {
  setIsLoading(true);

  try {
    const data = await fetchDetailsMovieById(movieId, controller, '/credits');
    const movieCast = [...data.cast].sort(
      (a, b) => b.popularity - a.popularity
    );

    setMovieCast(movieCast);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  } finally {
    setIsLoading(false);
  }
}

export async function getReviewsMovieById(
  movieId,
  setMovieReviews,
  setIsLoading,
  controller
) {
  setIsLoading(true);

  try {
    const data = await fetchDetailsMovieById(movieId, controller, '/reviews');
    const reviews = [...data.results].sort(
      (a, b) => b.author_details.rating - a.author_details.rating
    );

    setMovieReviews(reviews);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  } finally {
    setIsLoading(false);
  }
}

export async function getMovieGenreList(setGenres) {
  try {
    const data = await fetchMovieGenreList();

    setGenres(data.genres);
  } catch (error) {
    toast.remove();
    toast.error(defaultErrorMessage);
  }
}

export const getMoviesByGenre = async (
  genre,
  setMovies,
  setIsLoading,
  controller
) => {
  setIsLoading(true);

  try {
    const data = await fetchMoviesByGenre(genre, controller);

    setMovies(data.results);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  } finally {
    setIsLoading(false);
  }
};
