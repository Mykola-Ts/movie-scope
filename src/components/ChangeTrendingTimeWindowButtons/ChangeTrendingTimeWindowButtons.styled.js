import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;

  margin-bottom: 24px;
`;

export const ButtonListItem = styled.li`
  &:first-child button {
    border-radius: 8px 0px 0px 8px;
  }

  &:last-child button {
    border-radius: 0px 8px 8px 0px;
  }
`;

export const ChangePeriodBtn = styled.button`
  min-width: 160px;
  border: 2px solid var(--black-color);
  padding: 4px 8px;

  color: var(--black-color);
  background-color: var(--gray-color);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus),
  &.active {
    background-color: var(--white-color);
    border-color: var(--black-color);
    outline-color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    min-width: 180px;
  }
`;
