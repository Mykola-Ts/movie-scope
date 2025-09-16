import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavHeader = styled.header`
  width: 100%;
  border: 2px solid var(--white-color);
  border-radius: 0px 0px 8px 8px;
  padding-top: 20px;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 25px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 3px;

  color: currentColor;
`;

export const Navigation = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  display: block;

  min-width: 100px;
  padding: 8px;
  border: 2px solid var(--white-color);
  border-bottom: none;
  border-radius: 12px 12px 0px 0px;

  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.36px;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &.active,
  &:is(:hover, :focus) {
    color: var(--black-color);
    background-color: var(--gray-active-color);
  }

  @media screen and (min-width: 768px) {
    min-width: 140px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 200px;
  }
`;
