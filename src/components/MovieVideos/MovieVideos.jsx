import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovieVideos } from 'services/movies';
import { VideoIframe, VideoListItem, Wrapper } from './MovieVideos.styled';
import { MovieDescrSubTitle } from 'components/MovieDescr/MovieDescr.styled';

export const MovieVideos = ({ movieId }) => {
  const [videos, setVideos] = useState([]);

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

  return (
    <Wrapper>
      <MovieDescrSubTitle>Trailers</MovieDescrSubTitle>

      <ul>
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
      </ul>
    </Wrapper>
  );
};

MovieVideos.propTypes = {
  movieId: PropTypes.string.isRequired,
};
