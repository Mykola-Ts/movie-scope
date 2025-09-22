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

export const Descr = styled.p`
  margin-bottom: 8px;
`;

export const DescrItem = styled.span`
  font-weight: 700;
`;

export const ReviewLink = styled.a`
  color: var(--active-color);
`;
