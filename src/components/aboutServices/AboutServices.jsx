import AboutServicesCard from '../aboutServicesCard/AboutServicesCard'
import './aboutServices.css'
import nature1.png from '../../assets/img/nature1.png'
import nature 2.png from '../../assets/img/nature 2.png'
import nature3.jpg from '../../assets/img/nature3.jpg'
import nature4.jpg from '../../assets/img/nature5.jpg'

const AboutServices = () => {
  return (
    <div className='aboutServicesContainer'>
      <h1 className='aboutServicesH'>OUR SERVICES</h1>
      <div className='aboutServicesWrapper'>
        <div className='aboutServiceCardL'>
          <AboutServicesCard
            img={nature1.png}
             'Encompass comprehensive energy efficiency solutions.'
          />
          <AboutServicesCard
            'From personalized energy assessments to sustainable technology integration.'
            img={nature3.jpg}
          />
        </div>
        <div className='aboutServiceCardR'>
          <AboutServicesCard
             'we provide tailored guidance, empowering you to optimize energy usage and contribute to a greener planet.'
            img={nature4.jpg}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutServices
