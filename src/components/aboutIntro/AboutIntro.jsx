import './aboutIntro.css'

const AboutIntro = () => {
  return (
    <div className='aboutIntroContainer'>
      <h className='aboutIntroH'>ABOUT WATTS SAVVY</h>
      <div className='aboutIntroWrapper'>
        <div className='aboutIntroL'>
          <div className='aboutIntroLWrapper'>
            <div className='aboutIntroInfor'>
              <h className='aboutIntroT'>Who We Are</h>
              <p className='aboutIntroP'>
                Watts Savvy empowers individuals with knowledge and tools to embrace 
	        energy efficiency. We are advocates for sustainable living, 
	        offering insights and solutions for a greener and more environmentally conscious future
              </p>
            </div>
          </div>
        </div>
        <div className='aboutIntroR'>
          <div className='aboutIntroRWrapper'>
            <div className='aboutIntroInfor'>
              <h className='aboutIntroT'>Our Mission</h>
              <p className='aboutIntroP'>
                Our mission at Watts Savvy is to drive positive change by promoting energy efficiency and sustainability. 
	        We strive to empower communities, businesses, 
	        and individuals to make informed choices for a cleaner, greener, and more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro
