import PropTypes from 'prop-types';
import { MenuNavList } from 'components/MenuNavList/MenuNavList';
import { MobileMenuWrap } from './MobileMenu.styled';

export const MobileMenu = ({ onCloseMobileMenu }) => {
  return (
    <MobileMenuWrap>
      <MenuNavList isMobileMenu={true} onCloseMobileMenu={onCloseMobileMenu} />
    </MobileMenuWrap>
  );
};

MobileMenu.propTypes = {
  onCloseMobileMenu: PropTypes.func,
};
