import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovieVideos } from 'services/movies';
import {
  VideoIframe,
  VideoList,
  VideoListItem,
  Wrapper,
} from './MovieVideos.styled';
import { MovieDescrSubTitle } from 'components/MovieDescr/MovieDescr.styled';
import { StyledButton } from 'components/ShowMoreBtn/ShowMoreBtn.styled';

export const MovieVideos = ({ movieId }) => {
  const [videos, setVideos] = useState([]);
  const [isShowAllVideos, setIsShowAllVideos] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    getMovieVideos(movieId, setVideos, controller);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  const trailers = videos.filter(
    ({ type, site }) => site === 'YouTube' && type === 'Trailer'
  );

  const onClickShowMoreBtn = () => {
    setIsShowAllVideos(prev => !prev);
  };

  return (
    videos.length > 0 && (
      <Wrapper>
        <MovieDescrSubTitle>Trailers</MovieDescrSubTitle>

        <VideoList className={isShowAllVideos ? '' : 'short-list'}>
          {trailers.map(({ key }) => (
            <VideoListItem key={key}>
              <VideoIframe
                src={`https://www.youtube.com/embed/${key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></VideoIframe>
            </VideoListItem>
          ))}
        </VideoList>

        <StyledButton type="button" onClick={onClickShowMoreBtn}>
          {isShowAllVideos ? 'Show less trailers' : 'Show more trailers'}
        </StyledButton>
      </Wrapper>
    )
  );
};

MovieVideos.propTypes = {
  movieId: PropTypes.string.isRequired,
};
