import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 4px;
  margin-bottom: 16px;

  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.36px;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus) {
    color: var(--white-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    transform: scaleX(0);
    transform-origin: center;

    display: block;

    width: 100%;
    height: 1.5px;

    background-color: currentColor;

    transition: transform var(--transition-duration)
      var(--transition-timing-function);
  }

  &:is(:hover, :focus)::after {
    transform: scaleX(1);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
