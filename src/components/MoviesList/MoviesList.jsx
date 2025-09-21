import PropTypes from 'prop-types';
import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import { List, ListItem, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies = [], state = '/', movieListRef }) => {
  return (
    <List ref={movieListRef}>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={state}>
            <MoviesListItem movie={movie} />
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  state: PropTypes.object,
  movieListRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
