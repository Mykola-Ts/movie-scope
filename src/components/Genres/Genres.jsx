import PropTypes from 'prop-types';
import { List, StyledLink } from './Genres.styles';

export const Genres = ({ genres = [], currentGenre = '' }) => {
  return (
    <List>
      {genres.map(({ id, name }) => (
        <li key={id}>
          <StyledLink
            to={`/movies?genre=${id}`}
            className={`${currentGenre === id.toString() ? 'active' : ''}`}
          >
            {name}
          </StyledLink>
        </li>
      ))}
    </List>
  );
};

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
  currentGenre: PropTypes.string,
};
