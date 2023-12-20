import './homeIntro.css'
import conserve6.png from '../../assets/img/conserve6.png'

const HomeIntro = () => {
  return (
    <div className='homeIntroContainer'>
      <div className='homeIntroL'>
        <img src={circle} alt='homeIntroLImg' className='homeIntroLImg' />
      </div>
      <div className='homeIntroR'>
        <div className='homeIntroH2'>WHO WE ARE</div>
        <div className='homeIntroH1'>
          Embrace a cleaner and healthier Country! 
	  Our commitment to energy efficiency contributes to a sustainable and vibrant future for the Nation.
        </div>
        <div className='homeIntroP'>
          Transform your energy landscape with our comprehensive energy efficiency solutions. 
	  From Nairobi's vibrant city center to tech hubs and residential communities, 
	  we responsibly handle energy resources. If you're a large energy consumer, 
	  partner with us to ensure your brand becomes a leader in sustainable and efficient energy practices.
        </div>
        <button className='homeIntroBtn'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default HomeIntro
