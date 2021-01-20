import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/testimonials.css'
import Cover1 from '../images/cover-1.png'
import Cover2 from '../images/cover-2.png'
import Cover3 from '../images/cover-3.png'
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
     /*  onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
    >
      <SwiperSlide>
        <div className="content-gallery">
          <div className="img-gallery">
          <img  className="cover-img" src={Cover1} alt=""/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="content-gallery">
          <div className="img-gallery">
          <img className="cover-img" src={Cover2} alt=""/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="content-gallery">
          <div className="img-gallery">
          <img className="cover-img" src={Cover3} alt=""/>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}

export default Gallery;
