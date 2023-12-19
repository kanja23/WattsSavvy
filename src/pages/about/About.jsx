import AboutHero from '../../components/aboutHero/AboutHero'
import AboutIntro from '../../components/aboutIntro/AboutIntro'
import AboutServices from '../../components/aboutServices/AboutServices'
import './about.css'

const About = () => {
  return (
    <div className='aboutContainer'>
      <AboutHero />
      <AboutIntro />
      {/* <AboutServices /> */}
    </div>
  )
}

export default About
