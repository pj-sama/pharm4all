import React from 'react'

import Image from 'next/image';

import car_img_1 from '/public/images/carousel/carousel_1.jpg'
import car_img_2 from '/public/images/carousel/carousel_2.jpg'
import car_img_3 from '/public/images/carousel/carousel_3.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from '../../styles/Slideshow.module.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Slideshow() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.mySlide}>
                    <Image 
                        src={car_img_1} 
                        alt='A slide'
                        className={styles.carouselimg}
                        layout='responsive'
                    />
                    <div className={styles.carouselcaption}>
                        <h2 className='display-3'>Slide 1 </h2>
                        <p className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.mySlide}>
                    <Image 
                        src={car_img_2} 
                        alt='A slide' 
                        className={styles.carouselimg}
                    />
                    <div className={styles.carouselcaption}>
                        <h2 className='display-3'>Slide 2 </h2>
                        <p className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.mySlide}>
                    <Image 
                        src={car_img_3} 
                        alt='A slide' 
                        className={styles.carouselimg} 
                    />
                    <div className={styles.carouselcaption}>
                        <h2 className='display-3'>Slide 3 </h2>
                        <p className='display-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    )
}

export default Slideshow