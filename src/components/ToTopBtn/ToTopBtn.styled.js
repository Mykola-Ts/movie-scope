import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';

export const ScrollToTopBtn = styled(ScrollToTop)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  padding: 15px;

  color: rgba(0, 0, 0, 0.3);
  background-color: #ebedf0;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  outline: transparent;

  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &:is(:hover, :focus) {
    background-color: #ccd0d5;
  }

  @media screen and (min-width: 1440px) {
    width: 64px;
    height: 64px;
  }
`;
