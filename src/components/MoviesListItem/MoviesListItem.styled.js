import styled from 'styled-components';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

export const Descr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  padding: 8px;

  @media screen and (min-width: 375px) {
    height: 116px;
  }

  @media screen and (min-width: 768px) {
    height: 100px;
  }

  @media screen and (min-width: 1440px) {
    gap: 12px;

    height: 128px;
    padding: 12px;
  }
`;

export const Poster = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 320px;
  }

  @media screen and (min-width: 1440px) {
    height: 388px;
  }
`;

export const Title = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin: auto 0;
  overflow: hidden;

  text-align: center;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.96px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OutlineStar = styled(AiOutlineStar)`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const TwotoneStar = styled(AiTwotoneStar)`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const DescrYear = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.96px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const Adult = styled.span`
  position: absolute;
  top: 0;
  right: 0;

  padding: 8px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: 0.96px;

  color: var(--black-color);
  background-color: var(--gray-color);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: 0.36px;
  }
`;
