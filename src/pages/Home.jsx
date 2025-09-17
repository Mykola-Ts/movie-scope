import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getTopMovies } from 'services/movies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import {
  ChangeTrendingTimeWindowButtons,
  trendingTimeWindow,
} from 'components/ChangeTrendingTimeWindowButtons/ChangeTrendingTimeWindowButtons';
import { Loader } from 'components/Loader/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [timeWindow, setTimeWindow] = useState(
    searchParams.get('time_window') ?? trendingTimeWindow.day.value
  );
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const controllerRef = useRef();

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    getTopMovies(timeWindow, setMovies, setIsLoading, controllerRef.current);

    return () => {
      controllerRef.current.abort();
      toast.remove();
    };
  }, [timeWindow]);

  const changeTrendingTimeWindow = timeWindow => {
    searchParams.set('time_window', timeWindow);
    setSearchParams(searchParams);
    setTimeWindow(trendingTimeWindow[timeWindow].value);
  };

  return (
    <main>
      <ChangeTrendingTimeWindowButtons
        timeWindow={timeWindow}
        changeTimeWindow={changeTrendingTimeWindow}
      />

      <Title>{trendingTimeWindow[timeWindow].title}</Title>

      {movies.length > 0 && (
        <MoviesList movies={movies} state={{ from: location }} />
      )}

      <Loader isLoading={isLoading} />
    </main>
  );
};

export default Home;
