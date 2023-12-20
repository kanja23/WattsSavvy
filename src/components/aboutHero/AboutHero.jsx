import './aboutHero.css'
import { sliderImg } from '../../demoData'
import BtnSlider from '../btnSlider/BtnSlider'
import { useEffect, useState } from 'react'

const AboutHero = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== sliderImg.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === sliderImg.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(sliderImg.length)
    }
  }
  const moveDot = (index) => {
    setSlideIndex(index)
  }

  useEffect(() => {
    const lastIndex = sliderImg.length
    if (slideIndex < 0) {
      setSlideIndex(lastIndex)
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(1)
    }
  }, [slideIndex])

  // This part is used for slide intervals
  useEffect(() => {
    const slider = setInterval(() => {
      setSlideIndex(slideIndex + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [slideIndex])

  return (
    <div className='container-slider'>
      {sliderImg.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            key={obj.id}
          >
            <img src={obj.photo} alt='sliderImages' className='imgSlider' />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      <div className='container-dots'>
        {Array.from({ length: sliderImg.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default AboutHero
