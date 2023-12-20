import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/img/footerlogo.jpeg'
import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerT'>
        <div className='footerTL'>
          <Link to='/'>
            <img src={logo} alt='logo' className='footerLogo' />
          </Link>

          <p className='footerText'>SUBSCRIBE TO OUR NEWSLETTER</p>
          <div className='footerSubscribe'>
            <input
              type='text'
              placeholder='Enter your email address'
              className='footerSubscribeInput'
            />
            <button className='footerSubscribeBtn'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='footerTR'>
          <div className='footerTRSocial'>
            <h4 className='footerH'>ABOUT US</h4>
            <ul className='footerUl'>
              <Link to='/about/aboutUs'>
                <li className='footerUi'>Who we are</li>
              </Link>
              <Link to='/about/service'>
                <li className='footerUi'>Our Mission</li>
              </Link>
              <li className='footerUi'>Services</li>
              <li className='footerUi'>Our Projects</li>
              <li className='footerUi'>Partnerships</li>
            </ul>
          </div>

          <div className='footerTRSocial'>
            <h4 className='footerH'>RESOURCES</h4>
            <ul className='footerUl'>
              <li className='footerUi'>Careers</li>
              <li className='footerUi'>Blog</li>
              <li className='footerUi'>Resources</li>
              <li className='footerUi'>Gallery</li>
              <li className='footerUi'>FAQS</li>
            </ul>
          </div>
          <div className='footerTRSocial'>
            <h4 className='footerH contact'>CONTACT US</h4>
            <div className='house'>
              <FontAwesomeIcon icon={faHouse} className='iconF' />
              <h3 className='footerHC'>
                8 Mufangano-YMC Road, Naivas, Nairobi State
              </h3>
            </div>
            <div className='phone'>
              <FontAwesomeIcon icon={faPhone} className='iconF' />
              <h3 className='footerHC'>+2547010101</h3>
            </div>
            <div className='email'>
              <FontAwesomeIcon icon={faEnvelope} className='iconF' />
              <h3 className='footerHC'>hello@klinlag.ng</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='footerB'>
        <div className='footerBConnect'>
          <span className='footerBConnectSpan'></span>
          <h3 className='footerBConnectH'>CONNECT WITH US</h3>
          <span className='footerBConnectSpan'></span>
        </div>
        <div className='footerBSocial'>
          <div className='footerBSocialL'>
            <ul className='footerBSocialLUl'>
              <li className='footerBSocialLLi'>Terms</li>
              <li className='footerBSocialLLi'>Privacy</li>
            </ul>
          </div>
          <div className='footerBSocialR'>
            <ul className='footerBSocialRUl'>
              <li className='footerBSocialLi'>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </li>
              <li className='footerBSocialLi'>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </li>
              <li className='footerBSocialLi'>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className='footerBSocialLi'>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
