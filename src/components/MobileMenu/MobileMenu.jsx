import PropTypes from 'prop-types';
import { MenuNavList } from 'components/MenuNavList/MenuNavList';
import { MobileMenuContainer, MobileMenuWrap } from './MobileMenu.styled';

export const MobileMenu = ({ onCloseMobileMenu }) => {
  return (
    <MobileMenuWrap>
      <MobileMenuContainer>
        <MenuNavList
          isMobileMenu={true}
          onCloseMobileMenu={onCloseMobileMenu}
        />
      </MobileMenuContainer>
    </MobileMenuWrap>
  );
};

MobileMenu.propTypes = {
  onCloseMobileMenu: PropTypes.func,
};
