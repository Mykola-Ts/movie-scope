import {
  Links,
  LinksItem,
  StyledNavLink,
  Title,
  Wrapper,
} from './MovieDescrAdditional.styled';

export const MovieDescrAdditional = () => {
  return (
    <Wrapper>
      <Title>Additional information</Title>

      <Links>
        <LinksItem>
          <StyledNavLink to="cast">Show the cast</StyledNavLink>
        </LinksItem>
        <LinksItem>
          <StyledNavLink to="reviews">Show reviews</StyledNavLink>
        </LinksItem>
      </Links>
    </Wrapper>
  );
};
