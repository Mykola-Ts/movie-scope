import { BiCameraMovie } from 'react-icons/bi';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import {
  NavHeader,
  NavList,
  Navigation,
  StyledLink,
  Logo,
} from './Header.styled';

export const Header = () => {
  return (
    <NavHeader>
      <Container>
        <Navigation>
          <Logo to="/">
            <BiCameraMovie size={25} /> MOVIES
          </Logo>

          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavList>
        </Navigation>
      </Container>
    </NavHeader>
  );
};
