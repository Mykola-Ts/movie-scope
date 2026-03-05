import PropTypes from 'prop-types';
import {
  Links,
  LinksItem,
  StyledNavLink,
  Wrapper,
} from './MovieDescrAdditional.styled';
import { MovieDescrSubTitle } from 'components/MovieDescr/MovieDescr.styled';

export const MovieDescrAdditional = ({ location }) => {
  return (
    <Wrapper>
      <MovieDescrSubTitle>Additional information</MovieDescrSubTitle>

      <Links>
        <LinksItem>
          <StyledNavLink to="cast" state={{ from: location }}>
            Show the cast
          </StyledNavLink>
        </LinksItem>

        <LinksItem>
          <StyledNavLink to="reviews" state={{ from: location }}>
            Show reviews
          </StyledNavLink>
        </LinksItem>
      </Links>
    </Wrapper>
  );
};

MovieDescrAdditional.propTypes = {
  location: PropTypes.object.isRequired,
};
