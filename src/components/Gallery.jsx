import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/testimonials.css'
import slider1 from '../images/slider-1.png'
import slider2 from '../images/slider-2.png'
import slider3 from '../images/slider-3.png'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);
const Gallery = () => {
  return (
    <div className="content_gallery-global">
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      /* autoplay={{ delay: 2500, disableOnInteraction: false }} */
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="cover_back"
     /*  onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
    >
      <SwiperSlide >
        <div className="content-gallery">
          <div className="gallery_info">
            <p className="gallery_title">
              Fabricación y venta de saunas Unipersonales
            </p>
            <div className="line_graph"></div>
            <div className="button_link">
              <a href>
                <button type="button">
                  comprar
                </button>
              </a>
            </div>
          </div>
          <div className="gallery_img">
            <img src={slider1} alt=""/>
          </div>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="content-gallery">
          <div className="gallery_info">
            <p className="gallery_title">
              Mantenimiento y reparaciones
            </p>
            <div className="line_graph"></div>
            <div className="button_link">
              <a href>
                <button type="button">
                  comprar
                </button>
              </a>
            </div>
          </div>
          <div className="gallery_img">
            <img src={slider2} alt=""/>
          </div>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="content-gallery">
          <div className="gallery_info">
            <p className="gallery_title">
            Fabricación de Todo tipo de Piezas
            </p>
            <div className="line_graph"></div>
            <div className="button_link">
              <a href>
                <button type="button">
                  comprar
                </button>
              </a>
            </div>
          </div>
          <div className="gallery_img">
            <img src={slider3} alt=""/>
          </div>
          
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Gallery;
