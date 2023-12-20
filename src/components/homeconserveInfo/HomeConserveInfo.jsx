import './homeConserve.css'

import cr1 from '../../assets/img/cr1.jpeg'
import cr2 from '../../assets/img/cr2.jpeg'
import cr3 from '../../assets/img/cr3.jpeg'
import cr4 from '../../assets/img/cr4.jpeg'
import cr5 from '../../assets/img/cr5.jpeg'
import cr6 from '../../assets/img/cr6.jpeg'
import cr7 from '../../assets/img/cr7.jpeg'

const HomeConserveInfo = () => {
  return (
    <div className='homeConserveInfContainer'>
      <div className='homeConserveInfL'>
        <div className='conserve-cards'>
          <img src={cr1} alt='img' className='conserve-cards-img' />
          <p className='conserveP'>Lighting Efficiency</p>
        </div>
        <div className='conserve-cards'>
          <img src={cr2} alt='img' className='conserve-cards-img' />
          <p className='conserveP'>Appliance Upgrades</p>
        </div>
        <div className='conserve-cards'>
          <img src={cr3} alt='img' className='conserve-cards-img' />
          <p className='conserveP'>Insulation and Sealing</p>
        </div>
        <div className='conserve-cards'>
          <img src={cr4} alt='img' className='conserve-cards-img' />
          <p className='conserveP'>Renewable Energy Sources</p>
        </div>
        <div className='conserve-cards'>
          <img src={cr5} alt='img' className='conserve-cards-img' />
          <p className='conserveP'>Smart Technologies</p>
        </div>
        <div className='conserve-cards'>
          <img src={cr6} alt='img' className='conserve-cards-img' />
          <p className='conserveP'>Transportation Efficiency</p>
        </div>
        <div className='conserve-cards'>
          <img src={cr7} alt='img' className='conserve-cards-img' />
          <p className='conserveP'>HVAC Systems</p>
        </div>
        <div className='conserve-circle'>More &gt;&gt;</div>
      </div>
      <div className='homeConserveInfR'>
        <h1 className='homeConserveInfRH'>
          Curious about optimizing your energy use or unsure about what practices are energy-efficient?
        </h1>
        <p className='homeConserveInfRP'>Explore sustainable solutions with us and discover the positive impact you can make on your energy consumption habits</p>
      </div>
    </div>
  )
}

export default HomeConserveInfo
