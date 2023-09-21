import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchDetails, fetchMovieDetails } from 'components/services/api';
import { CastItem } from 'components/CastItem/CastItem';
import { Loader } from 'components/Loader/Loader';
import { List, ListItem, NoCastText } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState({});
  const [configurationImages, setConfigurationImages] = useState({
    baseUrl: 'http://image.tmdb.org/t/p/',
    profileSizes: '342',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();

    async function getMovieCast() {
      try {
        const data = await fetchMovieDetails(movieId, '/credits', controller);
        const movieCast = [...data.cast].sort(
          (a, b) => b.popularity - a.popularity
        );

        setMovieCast(movieCast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.remove();
          toast.error('Oops, something went wrong. Try reloading the page.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    getMovieCast();

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

        const { base_url, profile_sizes } = data.images;

        setConfigurationImages({
          baseUrl: base_url,
          profileSizes: profile_sizes,
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
    <div>
      {movieCast.length ? (
        <List>
          {movieCast.map(item => {
            return (
              <ListItem key={item.credit_id}>
                <CastItem
                  castItem={item}
                  configurationImages={configurationImages}
                />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <NoCastText>No information.</NoCastText>
      )}

      {isLoading && <Loader text="Loading data, please wait..." />}
    </div>
  );
};

export default Cast;
