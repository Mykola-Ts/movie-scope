import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;

  min-width: 160px;
  border: 2px solid var(--black-color);
  border-radius: 8px;
  padding: 4px 8px;
  margin: 40px auto 0;

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
