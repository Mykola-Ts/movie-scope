import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 12px;

  &.common-loader {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
  }
`;

export const Text = styled.p`
  text-align: center;
`;
