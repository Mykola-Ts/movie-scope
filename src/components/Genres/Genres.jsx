import PropTypes from 'prop-types';
import { List, StyledLink } from './Genres.styles';

export const Genres = ({ genres = [], currentGenre, setPage }) => {
  return (
    <List>
      {genres.map(({ id, name }) => (
        <li key={id}>
          <StyledLink
            to={`/movies?genre=${id}`}
            className={`${currentGenre === id.toString() ? 'active' : ''}`}
            onClick={() => setPage(1)}
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
  currentGenre: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};
