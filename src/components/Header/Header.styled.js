import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavHeader = styled.header`
  position: relative;
  z-index: 10;

  width: 100%;
  border: 2px solid var(--white-color);
  border-radius: 0px 0px 8px 8px;
  padding-top: 20px;

  @media screen and (max-width: 767px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
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
  align-items: center;
`;

export const MobileMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  padding: 0;

  color: currentColor;
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus, :active) {
    color: inherit;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
