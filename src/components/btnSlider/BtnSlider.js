import './btnSlider.css'
import green2.jpg from '../../assets/img/green2.jpg'
import green1.jpg from '../../assets/img/green1.jpg'

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt='rightArrow'
        className='imgSlider'
      />
    </button>
  )
}

export default BtnSlider
