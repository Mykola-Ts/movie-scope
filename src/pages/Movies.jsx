import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { getMovieByQuery } from 'services/movies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesSearchForm } from 'components/MoviesSearchForm/MoviesSearchForm';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [randomID, setRandomID] = useState('');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const controllerRef = useRef();

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
    setSearchParams({ searchParams });
  };

  return (
    <main>
      <div>
        <MoviesSearchForm onSearch={onSearch} />

        {movies.length > 0 && (
          <MoviesList movies={movies} state={{ from: location }} />
        )}

        <Loader isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Movies;
