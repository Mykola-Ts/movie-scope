import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getDetailsMovieById } from 'services/movies';
import { defaultErrorMessage } from 'helpers/helpers';
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
      toast.error(defaultErrorMessage);

      return;
    }

    const controller = new AbortController();

    getDetailsMovieById(movieId, setMovieDetails, setIsLoading, controller);

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
            <MovieDescrAdditional
              location={location.state?.from ?? { pathname: '/' }}
            />
          </>
        )}

        <Suspense fallback={<Loader isLoading={true} />}>
          <Outlet />
        </Suspense>

        <Loader isLoading={isLoading} />
      </div>
    </main>
  );
};

export default MovieDetails;
