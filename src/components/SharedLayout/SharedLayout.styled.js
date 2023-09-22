import styled from 'styled-components';

export const Container = styled.div`
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 24px;
  }
`;

export const Wrapper = styled.div`
  padding: 32px 0 80px;
`;
