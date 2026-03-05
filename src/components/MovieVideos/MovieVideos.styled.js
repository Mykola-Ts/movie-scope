import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const VideoListItem = styled.li`
  max-width: 800px;

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
