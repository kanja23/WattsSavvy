import './navbar.css'
import logo from '../../assets/img/logo.jpeg'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { logoutUser } from '../../slices/userSlice'
import { toast } from 'react-toastify'

const Navbar = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const url = pathname.split('/')[1]

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className='navbarContainer'>
      <div className='navbarLeft'>
        <Link to='/'>
          <img src={logo} alt='logo' className='navbarLogo' />
        </Link>
      </div>
      <div className={open ? 'navbarRight active' : 'navbarRight'}>
        <ul className='navbarUl'>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='/' onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='/about' onClick={closeMenu}>
              ABOUT US
            </Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='#' onClick={closeMenu}>
              HOW IT WORKS
            </Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='#' onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
          <li className={!url ? 'navbarLi1' : 'navbarLi2'}>
            <Link to='#' onClick={closeMenu}>
              BLOG
            </Link>
          </li>
          {user.email && (
            <li
              className={!url ? 'navbarLi1' : 'navbarLi2'}
              onClick={() => {
                dispatch(logoutUser(null))
                toast.warning('Logged out', { position: 'bottom-left' })
              }}
            >
              <Link onClick={closeMenu}>LOGOUT</Link>
            </li>
          )}
        </ul>
      </div>
      <div onClick={handleClick} className='icon'>
        {!open ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </div>
    </div>
  )
}

export default Navbar
