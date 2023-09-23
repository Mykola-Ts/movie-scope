import {
  Links,
  LinksItem,
  StyledNavLink,
  Title,
  Wrapper,
} from './MovieDescrAdditional.styled';

export const MovieDescrAdditional = ({ location }) => {
  return (
    <Wrapper>
      <Title>Additional information</Title>

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
