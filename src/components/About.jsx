import React from "react";
import pollution from '../images/pollution.jpg';
import pollutionn from '../images/pollutionn.jpg';
import pollutionnn from '../images/pollutionnn.jpg';
import airpollution from '../images/airpollution.jpg';
import pollutionnnnn from '../images/pollutionnnnn.jpg';
import { Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";


const About = () => {


    return (
        <>

            <div className='p-7 flex flex-wrap'>

                <div className='w-full flex flex-col flex-wrap gap-10'>
                    <div className='flex flex-wrap items-center justify-center gap-2'>
                        <h1 className='text-2xl sm:text-5xl font-bold'>Welcome to</h1>
                        <h1 className='text-2xl sm:text-5xl font-extrabold text-red-600'>Our Site</h1>
                    </div>
                    <hr className="border"/>
                    <div className="w-full flex flex-col sm:flex-row flex-wrap gap-16 justify-center items-center">

                        <div className="w-full sm:w-1/3">
                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                  }}
                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                modules={[Autoplay, EffectCreative]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={pollution} alt="pollution" /></SwiperSlide>
                                <SwiperSlide><img src={pollutionn} alt="pollutionn" /></SwiperSlide>
                                <SwiperSlide><img src={pollutionnn} alt="pollutionnn" /></SwiperSlide>
                                <SwiperSlide><img src={airpollution} alt="airpollution" /></SwiperSlide>
                                <SwiperSlide><img src={pollutionnnnn} alt="pollutionnnnn" /></SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="w-full sm:w-1/3 space-y-5">
                            <p className='text-sm flex flex-wrap text-black'>
                                Unimax Pollution Control (I) PVT. Ltd is a company that has been promoted with the objective of
                                providing superior technology products in pollution control industry. </p>

                            <p className='text-sm flex flex-wrap text-gray-500'>
                                Unimax has its head office in
                                Thane with a manufacturing set up in Wada where it offers its client a wide range of products Viz: High
                                efficiency Centrifugal blowers, Twin lobe blowers, Tube axial flow fan, Rotary feeders, Cyclone separators,
                                Multicyclone and Evaporative cooling system. </p>

                            <p className='text-sm flex flex-wrap text-gray-500'>
                                Unimax has the capability to develop specific equipment's for any
                                pollution challenges through its vast network of technologist available from the past many years of its experience
                                in this Industry. Our products have been appreciated by reputed buyers like Thermax Ltd, Wipro Ltd, Jubilant Organsys
                                Ltd, Coca Cola, Lloyd Steels, Hindalco Ltd, Dr. Reddys Laboratories Ltd, Ranbaxy Laboratories, Reliance Industries Ltd and
                                various other industries.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About