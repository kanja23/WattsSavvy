import React from 'react'
import './partners.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import p1 from '../../assets/img/p1.png'
import p2 from '../../assets/img/p2.png'
import p3 from '../../assets/img/p3.png'
import p4 from '../../assets/img/p4.png'
import p5 from '../../assets/img/p5.png'
import p6 from '../../assets/img/p6.png'

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='max-wrapper partners'>
      <div className='max-wrapper-content'>
        <div className='heading-sm partners-title'>PARTNERS</div>
        <Slider {...settings} className='partners-slider'>
          <div>
            <div className='partners-slider-img'>
              <img src={p1} alt='partners logo' className='logo' />
            </div>
          </div>
          <div>
            <div className='partners-slider-img'>
              <img src={p2} alt='partners logo' className='logo' />
            </div>
          </div>
          <div>
            <div className='partners-slider-img'>
              <img src={p3} alt='partners logo' className='logo' />
            </div>
          </div>
          <div>
            <div className='partners-slider-img'>
              <img src={p4} alt='partners logo' className='logo' />
            </div>
          </div>
          <div>
            <div className='partners-slider-img'>
              <img src={p5} alt='partners logo' className='logo' />
            </div>
          </div>
          <div>
            <div className='partners-slider-img'>
              <img src={p6} alt='partners logo' className='logo' />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Partners
