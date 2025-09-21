import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 12px;

  max-width: 1000px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  display: block;

  border-radius: 8px;
  padding: 4px 8px;

  background-color: #ffffff1a;
  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus),
  &.active {
    color: var(--black-color);
    background-color: var(--gray-active-color);
  }
`;
