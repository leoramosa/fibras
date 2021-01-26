
import React,  { useContext }  from 'react'
import {Link} from 'react-router-dom'
import AppContext from "../context/AppContext";
// Import Swiper React components
import 'swiper/swiper.scss';
import './styles/services.css'

import Ser1 from '../images/ser1.jpg'


function Services () {
  const {state} =useContext(AppContext)
  const { services } = state;
  
  return (
    <>
      <div className="content_services">
        <div className="content">
          <div className="title-event">
          <p>
            Mis Servicios

          </p>
          </div>
          <div className="content-service-g">
                {services.map((service, i) => (
                    <div  className="content-swiper">
                      <div className="content-imagen">
                        <img src={Ser1} alt=""/>
                      </div>
                        <div className="detalle">
                          <p className="detail-title">{service.name}</p>
                          
                          <div className="little-description">
                              <div className="breve">{service.breve}</div>
                          </div>
                            <div className="content-button">
                            <div className="content-bo">
                              <button className="button-whatsapp" type="button">
                              <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${service.mensaje}`} rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-whatsapp"></i> {service.buttontype}
                                 </a>
                                </button> 
                                </div>
                                <div className="content-bt">
                                <Link className="detail-ver" to="/one" >ver más</Link>
                                </div>
                                </div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
        </div>
    </>
  )
}

export default Services;