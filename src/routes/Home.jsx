import React from 'react'
import Partners from '../components/OurPartners/Partners';
import PromisePreview from '../components/Promise/PromisePreview';
import Services from '../components/Services/Services';
import Slideshow from '../components/SlideShow/Slideshow';

function Home() {
  return (
    <div>
        <Slideshow />
        <Services />
        <PromisePreview />
        <Partners />
    </div>
  )
}

export default Home