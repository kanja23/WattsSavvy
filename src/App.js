import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/navbar/Navbar'
import './app.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import About from './pages/about/About'
import AboutIntro from './components/aboutIntro/AboutIntro'
import ScrollToTop from './components/scrollToTip/ScrollToTop'
import AboutServices from './components/aboutServices/AboutServices'
import NotFound from './components/notFound/NotFound'
function App()
	return (
	<div className='appContainer'>
		<BrowserRouter>
		<ScrollToTop>
		<ToastContainer />
		<Navbar />
		<Routes>
		    <Route path='*' element={<Navigate to='/not-found' replace />} />
		    <Route path='/' element={<Home />} />
		    <Route path='/login' element={<Login />} />
		    <Route path='/register' element={<Register />} />
		    <Route path='/about' element={<About />}>
		      <Route path='/about/aboutUs' element={<AboutIntro />} />
		      <Route path='/about/service' element={<AboutServices />} />
		    </Route>
		    <Route path='/not-found' element={<NotFound />} />
		</Routes>
		<Footer />
	</ScrollToTop>
	</BrowserRouter>
      </div>
   )
}

export default App
