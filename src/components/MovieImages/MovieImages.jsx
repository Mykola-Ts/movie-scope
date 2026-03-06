import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { getMovieImages } from 'services/movies';
import { configurationImages } from 'helpers/helpers';
import { BaseSwiper } from 'components/BaseSwiper/BaseSwiper';
import {
  Photo,
  PhotosList,
  PhotosListItem,
  SwiperWrap,
} from './MovieImages.styled';
import { MovieDescrSubTitle } from 'components/MovieDescr/MovieDescr.styled';

export const MovieImages = ({ movieId, movieName }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getMovieImages(movieId, setImages, controller);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  const { baseUrl, backdropSize } = configurationImages;

  return (
    <SwiperWrap>
      <MovieDescrSubTitle>Images</MovieDescrSubTitle>

      <BaseSwiper>
        <PhotosList>
          {images.map(({ file_path }) => (
            <PhotosListItem key={file_path}>
              <SwiperSlide>
                <Photo
                  src={`${baseUrl}/w${backdropSize}/${file_path}`}
                  alt={`Image related to the film ${movieName}`}
                  loading="lazy"
                />
              </SwiperSlide>
            </PhotosListItem>
          ))}
        </PhotosList>
      </BaseSwiper>
    </SwiperWrap>
  );
};

MovieImages.propTypes = {
  movieId: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};
