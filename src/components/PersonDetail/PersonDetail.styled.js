import styled from 'styled-components';

export const Name = styled.h1`
  margin-bottom: 16px;

  font-size: 24px;
  line-height: 1.17;
  letter-spacing: 0.96px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 1.28px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;

    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`;

export const Photo = styled.img`
  max-width: 342px;
  border-radius: 8px;

  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const Biography = styled.div`
  margin-bottom: 16px;

  font-weight: 700;

  & p:first-child {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const BiographyText = styled.p`
  font-weight: 400;
`;

export const PhotosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
