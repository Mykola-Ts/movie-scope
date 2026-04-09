import styled from 'styled-components';

export const MobileMenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100vw;
  height: 100vh;
  padding: 72px 15px;

  color: var(--white-color);
  background: var(--background-color);
  background: -webkit-linear-gradient(
    to right,
    #414345,
    var(--background-color)
  );
  background: linear-gradient(to right, #414345, var(--background-color));

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  max-width: 375px;
  height: 100%;
  padding: 72px 15px;
  margin: 0 auto;
`;
