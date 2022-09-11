import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

// import car_img_1 from './images/carousel/carousel_1.jpg'
import car_img_2 from '/public/images/carousel/carousel_2.jpg'
import car_img_3 from '/public/images/carousel/carousel_3.jpg'

import styles from '../../styles/Slideshow.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function Slideshow() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image 
                        src='/images/carousel/carousel_1.jpg' 
                        layout="responsive" 
                        alt='Carousel image'
                        height={'7 vh'} 
                        className={styles.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src='/images/carousel/carousel_2.jpg' 
                        layout="responsive" 
                        alt='Carousel image' 
                        className={styles.img} 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src='/images/carousel/carousel_3.jpg'
                        layout="responsive" 
                        alt='Carousel image' 
                        className={styles.img}
                    />
                </SwiperSlide>
            </Swiper>
        </>

    )
}

export default Slideshow