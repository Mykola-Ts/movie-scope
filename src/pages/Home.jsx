import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovies } from 'components/services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ChangeTimeWindowButtons } from 'components/ChangeTimeWindowButtons/ChangeTimeWindowButtons';
import { Loader } from 'components/Loader/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [timeWindow, setTimeWindow] = useState(
    searchParams.get('time_window') ?? 'day'
  );
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const controllerRef = useRef();

  useEffect(() => {
    setIsLoading(true);

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    async function fetchTopMovies() {
      try {
        const data = await fetchMovies(
          `trending/movie/${timeWindow}`,
          controllerRef.current
        );

        if (!data.results.length) {
          toast.remove();
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );

          return;
        }

        setMovies(data.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.remove();
          toast.error('Oops, something went wrong. Try reloading the page.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchTopMovies();

    return () => {
      controllerRef.current.abort();
      toast.remove();
    };
  }, [timeWindow]);

  const chancheTimeWindow = timeWindow => {
    if (timeWindow === 'week') {
      searchParams.set('time_window', timeWindow);
      setSearchParams(searchParams);
      setTimeWindow('week');

      return;
    }

    setTimeWindow('day');
    setSearchParams({});
  };

  return (
    <main>
      <ChangeTimeWindowButtons
        timeWindow={timeWindow}
        chancheTimeWindow={chancheTimeWindow}
      />

      {movies.length > 0 && (
        <>
          <Title>
            {timeWindow === 'day' ? 'Trending today' : 'Trending this week'}
          </Title>
          <MoviesList movies={movies} state={{ from: location }} />
        </>
      )}

      {isLoading && <Loader text="Loading data, please wait..." />}
    </main>
  );
};

export default Home;
