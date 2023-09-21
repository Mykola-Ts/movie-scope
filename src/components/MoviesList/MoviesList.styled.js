import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 24px;

  width: 100%;
`;

export const ListItem = styled.li`
  position: relative;
  transform: scale(1, 1);

  display: flex;

  width: 100%;
  border-radius: 8px;

  overflow: hidden;

  color: var(--black-color);
  background-color: var(--gray-color);
  box-shadow: var(--box-shadow);

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    transform var(--transition-duration) var(--transition-timing-function);

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px * 2) / 3);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 24px * 4) / 5);
  }

  &:is(:hover, :focus) {
    transform: scale(1.04, 1.04);

    background-color: var(--gray-active-color);
  }
`;

export const StyledLink = styled(Link)`
  display: block;

  width: 100%;

  color: currentColor;
`;
