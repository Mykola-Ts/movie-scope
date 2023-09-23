import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieDetails } from 'services/api';
import { MovieDescr } from 'components/MovieDescr/MovieDescr';
import { MovieDescrAdditional } from 'components/MovieDescrAdditional/MovieDescrAdditional';
import { ToBackLink } from 'components/ToBackLink/ToBackLink';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) {
      toast.remove();
      toast.error('Oops, something went wrong. Try reloading the page.');

      return;
    }

    setIsLoading(true);

    const controller = new AbortController();

    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieId, '', controller);

        setMovieDetails(data);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.remove();
          toast.error('Oops, something went wrong. Try reloading the page.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();

    return () => {
      controller.abort();
      toast.remove();
    };
  }, [movieId]);

  return (
    <main>
      <div>
        <ToBackLink />

        {movieDetails && (
          <>
            <MovieDescr movieDetails={movieDetails} />
            <MovieDescrAdditional location={location.state?.from ?? '/'} />
          </>
        )}

        <Suspense fallback={<Loader text="Loading data, please wait..." />}>
          <Outlet />
        </Suspense>

        {isLoading && <Loader text="Loading data, please wait..." />}
      </div>
    </main>
  );
};

export default MovieDetails;
