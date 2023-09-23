import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieDetails } from 'services/api';
import { CastItem } from 'components/CastItem/CastItem';
import { Loader } from 'components/Loader/Loader';
import { List, ListItem, NoCastText } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

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

  return (
    <div>
      {movieCast.length ? (
        <List>
          {movieCast.map(item => {
            return (
              <ListItem key={item.credit_id}>
                <CastItem castItem={item} />
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
