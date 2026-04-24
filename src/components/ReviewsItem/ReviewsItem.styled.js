import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 8px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  border: 1px solid var(--text-gray-color);
  border-radius: 50%;

  overflow: hidden;

  font-size: 22px;
  line-height: normal;
  letter-spacing: 0.44px;

  background-color: #ffffffb3;
  box-shadow: var(--box-shadow);
`;

export const Avatar = styled.img`
  display: block;

  width: 36px;
  height: 36px;

  object-fit: cover;
`;

export const Name = styled.h4`
  font-size: 22px;
  line-height: normal;
  letter-spacing: 0.44px;
`;

export const DescrWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 8px;
`;

export const Descr = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${({ $lines }) => $lines ?? 'none'};
  line-clamp: ${({ $lines }) => $lines ?? 'none'};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DescrItem = styled.span`
  font-weight: 700;
`;

export const ClambToggleBtn = styled.button`
  border: 2px solid var(--black-color);
  border-radius: 8px;
  padding: 2px 4px;
  margin-left: auto;

  color: var(--black-color);
  background-color: var(--gray-color);
  outline: 2px solid transparent;

  transition:
    background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus),
  &.active {
    background-color: var(--white-color);
    border-color: var(--black-color);
    outline-color: var(--white-color);
  }
`;

export const ReviewLink = styled.a`
  color: var(--active-color);
`;
