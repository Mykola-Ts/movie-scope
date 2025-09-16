import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  return (
    <NavHeader>
      <Container>
        <Navigation>
          <Logo to="/" onClick={() => location.reload()}>
            <BiCameraMovie size={25} /> MovieScope
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
