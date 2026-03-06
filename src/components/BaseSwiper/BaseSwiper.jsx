import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

const isMobile = window.innerWidth < 768;

export const BaseSwiper = ({
  children,
  pagination = isMobile
    ? {
        type: 'fraction',
      }
    : { clickable: true },
  scrollbar = { draggable: true },
  navigation = true,
  spaceBetween = 20,
  keyboard = true,
  mousewheel = true,
  breakpoints = {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
}) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Keyboard,
        Keyboard,
        Mousewheel,
      ]}
      pagination={pagination}
      scrollbar={scrollbar}
      navigation={navigation}
      spaceBetween={spaceBetween}
      keyboard={keyboard}
      mousewheel={mousewheel}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

BaseSwiper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  pagination: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  scrollbar: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  spaceBetween: PropTypes.number,
  keyboard: PropTypes.bool,
  mousewheel: PropTypes.bool,
  breakpoints: PropTypes.object,
};
