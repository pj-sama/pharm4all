import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-bootstrap'

import car_img_1 from '/public/images/carousel/carousel_1.jpg'
import car_img_2 from '/public/images/carousel/carousel_2.jpg'
import car_img_3 from '/public/images/carousel/carousel_3.jpg'

import styles from './Slideshow.module.css'


function Slideshow() {
    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <Image 
                        className='d-block w-100'
                        layout='responsive' 
                        src={car_img_1} 
                        alt='...'
                    />
                    <Carousel.Caption>
                        <h5 className='display-3'>Slide Label</h5>
                        <p className='display-6'>Some text describing the content on this slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                        className='d-block w-100'
                        layout='responsive' 
                        src={car_img_2} 
                        alt='...'/>
                    <Carousel.Caption>
                        <h5 className='display-3'>Slide Label</h5>
                        <p className='display-6'>Some text describing the content on this slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                    className='d-block w-100' 
                    layout='responsive'
                    src={car_img_3} 
                    alt='...'/>
                    <Carousel.Caption>
                        <h5 className='display-3'>Slide Label</h5>
                        <p className='display-6'>Some text describing the content on this slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    )
}

export default Slideshow