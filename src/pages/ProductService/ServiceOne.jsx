import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'

import ser1 from '../../images/ser1.jpg'
import Tabs from './Tabs'

const ServiceOne = () => {
  const {state} = useContext(AppContext)
  const { services } = state;

  return (
    <>
      <div className="content_service-detail">
        <div className="header-service">
          <div className="header-content">
            <div className="overlay_service">
                <div className="content-title">
                    <p>
                      {services[0].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
                <li>Cabina de sauna fabricado en fibra de vidrio de medidas : 1.10mt alto x 0.60cm de ancho y 0.90cm de fondo.</li>
               <li>Una bandeja (recipiente de agua) de 4lt de capacidad donde va
                una resistencia de 1500w. encima de la bandeja va una tapa para mantener
                las hierbas medicinales por encima del agua.</li>
                <li>Un asiento cómodo hecho en fibra de vidrio con 3 niveles para distintos
                tipos de tamaño de personas.</li>  
                <li>Lleva un termostato de 0° a 120° para poder controlar la temperatura de la
                resistencia.</li>
                <li>Puerta termo sellada con manija para abrir y cerrar por dentro ( todo fabricado en
                fibra de vidrio ).</li>
                <li>Coderas para mayor comodidad al estar sentado dentro .</li>
                <li><strong>Medidas:</strong>  1.10 mt alto x 0.60 cm ancho x 0.90 cm fondo</li>
                <li>Colores a gusto del cliente</li>
                              </ul>
              <div className="service_detail_button">
                <div className="detail_request">
                   <div>Consultas: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[0].mensaje}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:fibras.lozano.eirl@gmail.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
                </div>
                <div className="call">
                  <div className="">Llamanos: </div> 
                  <div className="call_content">
                    <div className="">
                        <a href="tel://+016827932" className="">
                          <button type="button" className="btn_call">
                            <i className="fas fa-phone-alt"></i>(01) 682 7932
                          </button>
                        </a>
                    </div> 
                    <div className="">
                        <a href="tel://+51944408025" className="">
                          <button type="button" className="btn_call">
                          <i className="fas fa-phone-alt"></i> +51 944 408 025
                          </button>
                        </a>
                    </div>
                  </div> 
                </div>
              </div>
          </div>
          <div className="service_detail-img">
            <img src={ser1} alt=""/>
          </div>
        </div>

        <div className="service_gallery">
          <p className="title_gallery">Galería</p>
          <div className="service_gallery-content">
            <Tabs/>
          </div>
        </div>


    </div>
    </>
  )
}

export default ServiceOne;
