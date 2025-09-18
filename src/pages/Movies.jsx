import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import {
  getMovieByQuery,
  getMovieGenreList,
  getMoviesByGenre,
} from 'services/movies';
import { MoviesSearchForm } from 'components/MoviesSearchForm/MoviesSearchForm';
import { Genres } from 'components/Genres/Genres';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [randomID, setRandomID] = useState('');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [clearInput, setClearInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const controllerRef = useRef();
  const controllerRefGenres = useRef();
  const genre = searchParams.get('genre') ?? '';

  useEffect(() => {
    getMovieGenreList(setGenres);
  }, []);

  useEffect(() => {
    if (!genre) return;

    setQuery('');
    setClearInput(true);

    if (controllerRefGenres.current) {
      controllerRefGenres.current.abort();
    }

    controllerRefGenres.current = new AbortController();

    getMoviesByGenre(
      genre,
      setMovies,
      setIsLoading,
      controllerRefGenres.current
    );

    return () => {
      controllerRefGenres.current.abort();
      toast.remove();
    };
  }, [genre]);

  useEffect(() => {
    if (!query) {
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    getMovieByQuery(query, setMovies, setIsLoading, controllerRef.current);

    return () => {
      controllerRef.current.abort();
      toast.remove();
    };
  }, [query, randomID]);

  const onSearch = query => {
    setQuery(query);
    setRandomID(nanoid());

    searchParams.set('query', query);
    setSearchParams({ query });
  };

  const onReset = () => {
    setQuery('');
    setSearchParams({});
    setMovies([]);
  };

  return (
    <main>
      <MoviesSearchForm
        onSearch={onSearch}
        onReset={onReset}
        paramsQuery={query}
        clearInput={clearInput}
        setClearInput={setClearInput}
      />

      <Genres genres={genres} currentGenre={genre} />

      {movies.length > 0 && (
        <MoviesList movies={movies} state={{ from: location }} />
      )}

      <Loader isLoading={isLoading} />
    </main>
  );
};

export default Movies;
