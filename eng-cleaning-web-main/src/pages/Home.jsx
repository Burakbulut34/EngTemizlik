import React from 'react'
import Slider from '../components/UI/SliderSec.jsx'
import Helmet from '../components/Helmet/Helmet.js'
import About from './About.jsx'
import Services from './Service.jsx';
import References from './Reference.jsx'; 

const Home = () => {
  return (
  <>
  <Helmet title="Anasayfa"/>
  <Slider />
  <About/>
  <Services/>
  <References/>
  </>

  )
}

export default Home