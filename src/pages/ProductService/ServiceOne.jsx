import React from 'react'

import './css/serviceone.css'
import Imgbig from "../../images/ser1.jpg";
import Imgbig2 from "../../images/ser2.jpg";
import Imgbig3 from "../../images/ser3.jpg";
import Imgbig4 from "../../images/ser4.jpg";
import Imgbig5 from "../../images/ser5.jpg";
import Imgbig6 from "../../images/ser6.jpg";
import { SRLWrapper } from 'simple-react-lightbox';

const ServiceOne = () => {


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service">
          <div className="header-content">
            <div className="overlay-service">
                <div className="content-title">
                    <p>
                    Venta de Saunas Unipersonales
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-product-service">
            <div className="content_first">
              <div className="img_service-first">
                <img src={Imgbig} alt=""/>
              </div>

              <div className="info-second">
                <p className="title_once">
                 <b>Servicio</b>: Reparaciones y Mantenimiento 
                </p>
                <p className="twoInfo">
                 <b>Tipo</b>: fibra de vidrio
                </p>
                <p className="twoInfo">
                  <b>Tipos de productos</b>:
                  <br/>
                  - Jacuzzis
                  <br/>
                   - bañeras de hidromasaje
                  <br/>
                  - tanques Reservorios
                  <br/>
                  - piscinas
                  <br/>
                   - toboganes
                  <br/>
                  - yates
                  <br/>
                   - lavatorios
                </p>
                <div className="buttonclass">
                  <div className="onbutton">
                    <button type="button">
                    <i className="fab fa-whatsapp"></i> Solicitar</button>
                  </div>
                  <div className="twobutton">
                  <button type="button"><i class="fas fa-phone-alt"></i> Llamar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_second">
              <SRLWrapper className="wrapperImg">
              <div className="img-small">
                <img src={Imgbig} alt=""/>
              </div>
              <div className="img-small">
                <img src={Imgbig2} alt=""/>
              </div>
              <div className="img-small">
                <img src={Imgbig3} alt=""/>
              </div>
              <div className="img-small">
                <img src={Imgbig4} alt=""/>
              </div>
              <div className="img-small">
                <img src={Imgbig5} alt=""/>
              </div>
              <div className="img-small">
                <img src={Imgbig6} alt=""/>
              </div>
              </SRLWrapper>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default ServiceOne;
