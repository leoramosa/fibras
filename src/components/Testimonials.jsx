import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/testimonials.css'
import Pis from '../images/piscin.jpg'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);
const Testimonials = () => {
  return (
    <div className="content_testimonials">
      <div className="title-testimonios">
        <p>Algunos servicios</p>
      </div>
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      /* autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true} */
      navigation
     /*  onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
    >
      <SwiperSlide>
        <div className="content-service">
          <div className="img-elemnet">
            <img src={Pis} alt=""/>
          </div>
          <div className="information-service">
            <p className="title-product"> Servicio 1</p>
            <p className="title-info">ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchang</p>
            <div className="button">
              <button type="button">Ver servicio</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="content-service">
          <div className="img-elemnet">
            <img src={Pis} alt=""/>
          </div>
          <div className="information-service">
            <p className="title-product">  Servicio 2</p>
            <p className="title-info">ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchang</p>
            <div className="button">
              <button type="button">Ver servicio</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="content-service">
          <div className="img-elemnet">
            <img src={Pis} alt=""/>
          </div>
          <div className="information-service">
            <p className="title-product"> Servicio 3</p>
            <p className="title-info">ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchang</p>
            <div className="button">
              <button type="button">Ver servicio</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}

export default Testimonials;
