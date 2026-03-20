import styled from 'styled-components';

const maxWdthContainer = '800px';

export const Wrapper = styled.div`
  max-width: ${maxWdthContainer};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const VideoList = styled.ul`
  margin-bottom: 20px;

  &.short-list {
    li:not(:first-child) {
      position: absolute;

      width: 1px;
      height: 1px;
      border: 0;
      padding: 0;
      margin: -1px;

      overflow: hidden;
      white-space: nowrap;
      clip-path: inset(100%);
    }
  }
`;

export const VideoListItem = styled.li`
  max-width: ${maxWdthContainer};

  aspect-ratio: 16 / 9;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & iframe {
    width: 100%;
    height: 100%;
  }
`;

export const VideoIframe = styled.iframe`
  border: none;
  border-radius: 8px;
`;
