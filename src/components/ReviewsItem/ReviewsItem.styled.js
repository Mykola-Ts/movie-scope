import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export const DescrMetaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Name = styled.h4`
  font-size: 22px;
  line-height: normal;
  letter-spacing: 0.44px;
`;

export const DescrContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  border: none;
  border-radius: 8px;
  padding: 2px 4px;
  margin-left: auto;

  color: var(--black-color);
  background-color: var(--gray-color);
  outline: 2px solid transparent;

  transition:
    background-color var(--transition-duration)
      var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus),
  &.active {
    background-color: var(--white-color);
    outline-color: var(--white-color);
  }
`;

export const ReviewLink = styled.a`
  position: relative;

  align-self: flex-start;

  color: var(--active-color);

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
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
`;
