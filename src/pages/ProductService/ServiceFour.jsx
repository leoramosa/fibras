import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import { SRLWrapper } from 'simple-react-lightbox';
import ser4 from '../../images/ser4.jpg'


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
                      {services[3].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
                <li>Somos expertos en la fabricación de todo tipo de matrices, prototipos y piezas en fibra de
                  vidrio para su negocio, empresa o cualquier necesidad. </li>
              </ul>
              <div className="service_detail_button">
              <div className="detail_request">
                   <div>Consultas: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[3].mensaje}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:fibras.lozano.eirl@gmail.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
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
            <img src={ser4} alt=""/>
          </div>
        </div>

        <div className="service_gallery">
          <p className="title_gallery">Galería</p>
          <div className="service_gallery-content">
          <SRLWrapper className="">
            <div className="wrapperImg">
              {services[3].imagen.map((service, i) => (
                  <div key={i} className="img-small">
                    <div className="overlay_service_one">
                    <i className="fas fa-search"></i>
                    </div>
                    <img src={service.img} alt=""/>
                  </div>
                  
                  ))}
              </div>
           </SRLWrapper>
          </div>
        </div>


        
    </div>
    </>
  )
}

export default ServiceOne;
