import React, { Fragment } from 'react';
import './Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ImageSlider from '../../components/Sliders/ImageSlider/ImageSlider';
import CardSlider from '../../components/Sliders/CardSlider/CradSlider';
import About from '../../components/About/About';
import Map from '../../components/Map/Map';

const home = () => {
  return (
    <Fragment>
      {/* Header */}
      <Header />
      
      {/* Main */}
      <ImageSlider />
      <CardSlider />
      <About />
      {/* <Map /> */}

      {/* Footer */}
      <Footer />
    </Fragment>
  )
}

export default home