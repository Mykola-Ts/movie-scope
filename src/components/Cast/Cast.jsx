import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getCastMovieById } from 'services/movies';
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

    const controller = new AbortController();

    getCastMovieById(movieId, setMovieCast, setIsLoading, controller);

    return () => {
      controller.abort();
      toast.remove();
    };
  }, [movieId]);

  return (
    <div>
      {movieCast.length ? (
        <List>
          {movieCast.map(item => (
            <ListItem key={item.credit_id}>
              <CastItem castItem={item} />
            </ListItem>
          ))}
        </List>
      ) : (
        <NoCastText>No cast information available.</NoCastText>
      )}

      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Cast;
