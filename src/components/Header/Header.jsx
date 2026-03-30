import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MenuNavList } from 'components/MenuNavList/MenuNavList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { NavHeader, Navigation, Logo, MobileMenuBtn } from './Header.styled';

export const Header = ({ isOpenMobMenu, onToggleMobileMenu }) => {
  const location = useLocation();

  return (
    <NavHeader>
      <Container>
        <Navigation>
          <Logo to="/" onClick={() => location.reload()}>
            <BiCameraMovie size={25} /> MovieScope
          </Logo>

          <MenuNavList
            isMobileMenu={false}
            onCloseMobileMenu={onToggleMobileMenu}
          />

          <MobileMenuBtn
            type="button"
            aria-label="Toggle mobile menu"
            onClick={onToggleMobileMenu}
          >
            {isOpenMobMenu ? (
              <AiOutlineClose size={28} strokeWidth={0.5} />
            ) : (
              <RxHamburgerMenu size={28} strokeWidth={0.5} />
            )}
          </MobileMenuBtn>
        </Navigation>
      </Container>
    </NavHeader>
  );
};

Header.propTypes = {
  isOpenMobMenu: PropTypes.bool.isRequired,
  onToggleMobileMenu: PropTypes.func.isRequired,
};
