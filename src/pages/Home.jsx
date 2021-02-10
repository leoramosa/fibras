import React from 'react'
import './styles/home.css'
import Gallery from '../components/Gallery'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'

 const Home = () => {
  return (
    <>

      <div className="content_home">
        <div className="content_swiper_slider">
          <Gallery/>
        </div>

        <div className="home_information">
          <p className="title_first">Servicios destacados</p>
          <div className="home_information-content">
            <div className="info_box">
              <div className="img_back_home one">
                <div className="img_hover">
                  <img src={icon1} alt=""/>
                </div>
              </div>
              <div className="info_content">
                <p> Fabricación y venta de saunas Unipersonales</p>
                <div className="">
                  <a href>ver mas</a>
                </div>
              </div>
            </div>
            <div className="info_box">
              <div className="img_back_home two">
                <div className="img_hover">

              <img src={icon2} alt=""/>
                </div>
              </div>
              <div className="info_content">
                <p>Mantenimiento y reparaciones</p>
                <div className="">
                  <a href>ver mas</a>
                </div>
              </div>
            </div>
            <div className="info_box">
              <div className="img_back_home three">
                <div className="img_hover">

              <img src={icon3} alt=""/>
                </div>
              </div>
              <div className="info_content">
                <p>Mantenimiento de sistema eléctrico de saunas unipersonales</p>
                <div className="">
                  <a href>ver mas</a>
                </div>
              </div>
            </div>
            <div className="info_box">
              <div className="img_back_home four">
                <div className="img_hover">

              <img src={icon4} alt=""/>
                </div>
              </div>
              <div className="info_content">
                <p>Fabricación de Todo tipo de Piezas</p>
                <div className="">
                  <a href>ver mas</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Home;