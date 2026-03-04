import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import { getMovieImages } from 'services/movies';
import { configurationImages } from 'helpers/helpers';
import {
  Photo,
  PhotosList,
  PhotosListItem,
  SwiperWrap,
} from './MovieImages.styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

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
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Keyboard,
          Keyboard,
          Mousewheel,
        ]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={true}
        slidesPerView={2}
        spaceBetween={20}
        keyboard
        mousewheel
      >
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
      </Swiper>
    </SwiperWrap>
  );
};

MovieImages.propTypes = {
  movieId: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};
