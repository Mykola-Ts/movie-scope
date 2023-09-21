import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { fetchDetails } from 'components/services/api';
import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import { List, ListItem, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies, state }) => {
  const [configurationImages, setConfigurationImages] = useState({
    baseUrl: 'http://image.tmdb.org/t/p/',
    posterSizes: '342',
  });

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
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={state}>
            <MoviesListItem
              movies={movie}
              configurationImages={configurationImages}
            />
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  state: PropTypes.object,
};
