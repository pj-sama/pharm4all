import React from 'react'
import { Carousel } from 'react-bootstrap'
import car_img_1 from  '../../assets/img/carousel/car_img_1.jpg'
import car_img_2 from  '../../assets/img/carousel/car_img_2.jpg'
import car_img_3 from  '../../assets/img/carousel/car_img_3.jpg'
import '../../assets/css/components/Slideshow.css'
function Slideshow() {
  return (
    <Carousel>
        <Carousel.Item>
            <img className='d-block w-100' src={car_img_1} alt='...'/>
            <Carousel.Caption>
                <h5 class='display-3'>Slide Label</h5>
                <p class='display-6'>Some text describing the content on this slide</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={car_img_2} alt='...'/>
            <Carousel.Caption>
                <h5 class='display-3'>Slide Label</h5>
                <p class='display-6'>Some text describing the content on this slide</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={car_img_3} alt='...'/>
            <Carousel.Caption>
                <h5 class='display-3'>Slide Label</h5>
                <p class='display-6'>Some text describing the content on this slide</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Slideshow