import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-bottom: 16px;

  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.36px;

  color: var(--text-gray-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: normal;
    letter-spacing: 0.44px;
  }
`;

export const Title = styled.p`
  margin-bottom: 16px;

  font-weight: 700;
`;

export const Links = styled.ul`
  display: flex;
`;

export const LinksItem = styled.li`
  &:first-child a {
    border-radius: 8px 0px 0px 8px;
  }

  &:last-child a {
    border-radius: 0px 8px 8px 0px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  min-width: 160px;
  padding: 4px 8px;
  border: 2px solid var(--black-color);

  color: var(--black-color);
  background-color: var(--gray-color);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  @media screen and (min-width: 768px) {
    min-width: 180px;
  }

  &:is(:hover, :focus),
  &.active {
    background-color: var(--white-color);
    border-color: var(--black-color);
    outline-color: var(--white-color);
  }
`;
