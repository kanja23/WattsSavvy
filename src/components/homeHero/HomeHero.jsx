import './homeHero.css'
import nature7.jpg from '../../assets/img/nature7.jpg'
import nature1.png from '../../assets/img/nature1.png'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <div className='homeHeroContainer'>
      <div className='homeHeroL'>
        <h1 className='homeHeroT'>
          RE-USE THE <span className='homeHeroTSpan'>REFUSE</span>
        </h1>
        <p className='homeHeroP'>
          For a cleaner, energy-efficient environment, 
	  let's harness the power of sustainable practices. 
	  Be an advocate for energy efficiency by adopting eco-friendly habits. 
	  Whether you're a conscious energy user or seeking efficient solutions for your business, WattsSavvy has you covered.
        </p>
        <div className='homeHeroButton'>
          <Link to='/register'>
            <button className='homeHeroGet'>GET STARTED</button>
          </Link>
          <button className='homeheroSign'>
            <Link to='/login'>SIGN IN</Link>
          </button>
        </div>
      </div>
      <div className='homeHeroR'>
        <img src={nature7.jpg} alt='nature background' className='nature7.jpg' />
        <img src={nature1.png} alt='nature1.png' className='nature1.png' />
      </div>
    </div>
  )
}

export default HomeHero
