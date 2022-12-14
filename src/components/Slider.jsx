import React from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay, A11y, Scrollbar, Pagination } from 'swiper';

const Slider = ({children}) => {
  return (
        <Swiper
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            rewind={true}
            autoplay={{delay: 3000, disableOnInteraction: true}}
            // navigation={true}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={
                {
                    // when window width is >= 320px
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    430: {
                    slidesPerView: 1,
                    spaceBetween: 20
                    },
                    // when window width is >= 480px
                    550: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    // when window width is >= 640px
                    850: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1150: {
                    slidesPerView: 4,
                    spaceBetween: 30
                    }
                }
            }
        >
            {children}
        </Swiper>
  )
}

export default Slider