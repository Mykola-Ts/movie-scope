import styled from 'styled-components';

export const SwiperWrap = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const PhotosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const PhotosListItem = styled.li`
  max-width: 780px;
`;

export const Photo = styled.img`
  max-width: 780px;
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;
