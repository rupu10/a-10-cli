import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import slideA from '../../assets/360_F_954766031_VcGmKOmE4b7Q1eBZ.jpg';
import slideB from '../../assets/chicken_curry_61994_16x9.jpg';
import slideC from '../../assets/Margherita-Pizza.jpg';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';


const Slider = () => {
    return (
        <Swiper
        modules ={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        >
            <SwiperSlide>
                <img
            src={slideA}
            alt="Slide 1"
            className="w-full max-h-[700px]"
          />
            </SwiperSlide>
            <SwiperSlide>
                <img
            src={slideB}
            alt="Slide 1"
            className="w-full max-h-[700px]"
          />
            </SwiperSlide>
            <SwiperSlide>
                <img
            src={slideC}
            alt="Slide 1"
            className="w-full max-h-[700px]"
          />
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;