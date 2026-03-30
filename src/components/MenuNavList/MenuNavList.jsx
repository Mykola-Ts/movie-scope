import PropTypes from 'prop-types';
import { NavList, StyledLink } from './MenuNavList.styled';

export const MenuNavList = ({ isMobileMenu, onCloseMobileMenu }) => {
  const onClickNavLink = () => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu(false);
    }
  };

  return (
    <NavList $isMobileMenu={Boolean(isMobileMenu)}>
      <li>
        <StyledLink to="/" onClick={onClickNavLink}>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/movies" onClick={onClickNavLink}>
          Movies
        </StyledLink>
      </li>
    </NavList>
  );
};

MenuNavList.propTypes = {
  isMobileMenu: PropTypes.bool.isRequired,
  onCloseMobileMenu: PropTypes.func,
};
