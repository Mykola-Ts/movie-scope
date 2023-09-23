import PropTypes from 'prop-types';
import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import { List, ListItem, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies = [], state = '/' }) => {
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={state}>
            <MoviesListItem movies={movie} />
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
