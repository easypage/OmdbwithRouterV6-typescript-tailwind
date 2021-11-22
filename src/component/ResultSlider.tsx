import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/card.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { movie } from '../module/redux/reducer/SearchMovieReducer';
import MovieCard from './MovieCard';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
type ResultSliderProps = {
  movieList: Array<movie>;
};

function ResultSlider({ movieList }: ResultSliderProps) {
  return (
    <div className="relative w-6/6 m-auto">
      <h2>스와이프 구역</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        // autoplay={{ delay: 10000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {movieList.map((movie) => {
          console.log('실행됨');

          return (
            <SwiperSlide key={movie.imdbID}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ResultSlider;
