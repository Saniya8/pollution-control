import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import pollution from '../images/pollution.jpg';
import pollutionn from '../images/pollutionn.jpg';
import pollutionnn from '../images/pollutionnn.jpg';
import airpollution from '../images/airpollution.jpg';
import pollutionnnnn from '../images/pollutionnnnn.jpg';
import zIndex from "@material-ui/core/styles/zIndex";



const Hero = () => {
  return (
    <div className="pt-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <h1 className="text-center text-white text-lg sm:text-5xl font-extrabold absolute top-2/4 left-2/4" style={{ transform: 'translate(-50%, -50%)', zIndex: '1' }}>POLLUTION CONTROL INDUSTRY</h1>
        {/* <SwiperSlide><img src={pollution} alt="pollution" /></SwiperSlide>
        <SwiperSlide><img src={pollutionn} alt="pollutionn" /></SwiperSlide>
        <SwiperSlide><img src={pollutionnn} alt="pollutionnn" /></SwiperSlide>
        <SwiperSlide><img src={airpollution} alt="airpollution" /></SwiperSlide>
        <SwiperSlide><img src={pollutionnnnn} alt="pollutionnnnn" /></SwiperSlide> */}

        <video class="w-full" autoPlay muted loop>
          <source
            src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
            type="video/mp4" />
        </video>

      </Swiper>
    </div>
  )
};

export default Hero;