import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchDetails, fetchMovieDetails } from 'components/services/api';
import { MovieDescr } from 'components/MovieDescr/MovieDescr';
import { MovieDescrAdditional } from 'components/MovieDescrAdditional/MovieDescrAdditional';
import { ToBackLink } from 'components/ToBackLink/ToBackLink';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [configurationImages, setConfigurationImages] = useState({
    baseUrl: 'http://image.tmdb.org/t/p/',
    posterSizes: 'w342',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
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

  useEffect(() => {
    const controller = new AbortController();

    async function fetchConfigurationImages() {
      try {
        const data = await fetchDetails(controller);

        if (!data.images) {
          return;
        }

        const { base_url, poster_sizes } = data.images;

        setConfigurationImages({
          baseUrl: base_url,
          posterSizes: poster_sizes,
        });
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.remove();
          toast.error('Oops, something went wrong. Try reloading the page.');
        }
      }
    }

    fetchConfigurationImages();

    return () => {
      controller.abort();
      toast.remove();
    };
  }, []);

  return (
    <main>
      <div>
        <ToBackLink />

        <MovieDescr
          movieDetails={movieDetails}
          configurationImages={configurationImages}
        />
        <MovieDescrAdditional location={location.state.from} />

        <Suspense fallback={<Loader text="Loading data, please wait..." />}>
          <Outlet />
        </Suspense>

        {isLoading && <Loader text="Loading data, please wait..." />}
      </div>
    </main>
  );
};

export default MovieDetails;
