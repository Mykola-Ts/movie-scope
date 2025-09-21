import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-self: center;
  align-items: center;

  border: 2px solid var(--black-color);
  border-radius: 8px;
  padding: 4px 8px;

  color: var(--black-color);
  background-color: var(--gray-color);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:not(:disabled):is(:hover, :focus),
  &:not(:disabled).active {
    background-color: var(--white-color);
    border-color: var(--black-color);
    outline-color: var(--white-color);
  }

  &:disabled {
    cursor: not-allowed;

    border-color: var(--gray-color);
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
  }
`;
