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
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [randomID, setRandomID] = useState('');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [page, setPage] = useState(Number(searchParams.get('page') ?? 1));
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [clearInput, setClearInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const movieListRef = useRef();
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
      page,
      setMovies,
      setTotalPages,
      setIsLoading,
      controllerRefGenres.current
    );

    return () => {
      controllerRefGenres.current.abort();
      toast.remove();
    };
  }, [genre, page, totalPages]);

  useEffect(() => {
    if (!query) {
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    getMovieByQuery(
      query,
      page,
      setMovies,
      setTotalPages,
      setIsLoading,
      controllerRef.current
    );

    return () => {
      controllerRef.current.abort();
      toast.remove();
    };
  }, [query, page, randomID]);

  const onSearch = query => {
    setQuery(query);
    setPage(1);
    setRandomID(nanoid());

    searchParams.set('query', query);
    setSearchParams({ query });
  };

  const onReset = () => {
    setQuery('');
    setSearchParams({});
    setMovies([]);
  };

  const onChangePage = (evt, selectedPage) => {
    const target = evt.target;
    const action = target.dataset.action;
    let newPage = selectedPage || page;

    if (action) {
      if (action === 'next') {
        if (page === totalPages) return;

        newPage += 1;
      } else {
        if (page === 1) return;

        newPage -= 1;
      }
    }

    setPage(newPage);
    searchParams.set('page', newPage);
    setSearchParams(searchParams);

    movieListRef?.current.scrollIntoView({ block: 'start' });
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

      <Genres genres={genres} currentGenre={genre} setPage={setPage} />

      {movies.length > 0 && (
        <>
          <MoviesList
            movies={movies}
            state={{ from: location }}
            movieListRef={movieListRef}
          />

          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              isLastPage={page === totalPages}
              onChangePage={onChangePage}
            />
          )}
        </>
      )}

      <Loader isLoading={isLoading} />
    </main>
  );
};

export default Movies;
