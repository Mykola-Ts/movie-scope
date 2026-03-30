import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  max-width: 768px;

  @media screen and (max-width: 767px) {
    display: ${({ $isMobileMenu }) => ($isMobileMenu ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    height: 100%;

    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.5px;

    & a {
      padding: 8px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;

  min-width: 100px;
  border: 2px solid var(--white-color);
  border-radius: 12px;
  padding: 8px;

  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.36px;

  color: currentColor;

  transition:
    color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus),
  &.active {
    color: var(--black-color);
    background-color: var(--gray-active-color);
  }

  @media screen and (min-width: 768px) {
    min-width: 140px;
    border-bottom: none;
    border-radius: 12px 12px 0px 0px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 200px;
  }
`;
