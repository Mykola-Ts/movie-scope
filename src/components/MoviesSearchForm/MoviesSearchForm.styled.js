import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-bottom: 40px;
`;

export const InputLabel = styled.label`
  position: relative;

  width: 100%;
  margin-right: 20px;

  @media screen and (min-width: 1440px) {
    width: 800px;
  }
`;

export const SearchInput = styled.input`
  display: block;

  width: 100%;
  padding: 8px 32px;
  border: 2px solid transparent;
  border-radius: 8px;

  overflow: hidden;

  color: var(--black-color);
  background-color: var(--gray-color);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:focus {
    background-color: var(--white-color);
    border-color: var(--black-color);
    outline-color: var(--white-color);
  }
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);

  fill: var(--black-color);
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  cursor: pointer;

  fill: var(--black-color);
`;

export const SubmitBtn = styled.button`
  min-width: 100px;
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 8px;

  color: var(--black-color);
  background-color: var(--gray-color);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus) {
    background-color: var(--white-color);
    border-color: var(--black-color);
    outline-color: var(--white-color);
  }
`;
