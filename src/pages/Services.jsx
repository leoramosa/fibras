/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


// Import Swiper React components
import 'swiper/swiper.scss';
import './styles/services.css'

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Services () {
  
  return (
    <>
      <div className="content_services">
        <div className="content">
          <div className="title-event">
          <p>
            Mis Servicios

          </p>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default Services;