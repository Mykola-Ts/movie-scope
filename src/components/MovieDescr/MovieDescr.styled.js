import styled from 'styled-components';

export const Details = styled.div`
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.36px;

  color: var(--text-gray-color);

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    line-height: normal;
    letter-spacing: 0.44px;
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

export const Poster = styled.img`
  max-width: 342px;
  border-radius: 8px;

  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  font-weight: 700;

  & ul {
    @media screen and (min-width: 1440px) {
      display: flex;
      gap: 4px;
    }
  }
`;

export const MovieLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-weight: 700;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus) {
    color: var(--white-color);
  }
`;

export const DescrValue = styled.p`
  font-weight: 400;
`;

export const ListValues = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 4px;

  font-weight: 400;

  & li:not(:last-child)::after {
    content: ',';
  }
`;

export const Overview = styled.div`
  margin-bottom: 16px;

  font-weight: 700;

  & p:first-child {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
