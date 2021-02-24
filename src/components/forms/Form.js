import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import imgContact from '../../images/img_contact.jpg'


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <div className='form-content-left'>
        <div className="map_google">
          <div className="img_contact">
            <img src={imgContact} alt=""/>
          </div>
          
          </div>
          Contáctanos:
          <div className="whastapp-btn">
            <a className="btn-whatsapp" href="https://api.whatsapp.com/send?phone=51944408025&text=Hola%20quisiera%20m%C3%A1s%20infomacion%20de%20sus%20servicios..." rel="noopener noreferrer" target="_blank">
               <i className="fab fa-whatsapp"></i> Envianos un mensaje
            </a>
            <a className="btn-call" href="tel://+016827932">
                <i className="fas fa-phone-alt"></i> (01) 682 7932
             </a>
             <a href="tel://+51944408025" className="btn-call">
                <i className="fas fa-phone-alt"></i> +51 944 408 025
             </a>
          </div>

          <iframe className="content_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.7977057353198!2d-77.08873974520706!3d-12.017225768645245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce9717b3851d%3A0x4d598135f5f97c10!2sCalle%20Ostigon%20150%2C%20Cercado%20de%20Lima%2007041!5e0!3m2!1ses-419!2spe!4v1613681609163!5m2!1ses-419!2spe" width="600" height="280" frameborder="0"  allowfullscreen="" aria-hidden="false" title="google-map"></iframe>

          
        </div>
      </div>
    </>
  );
};

export default Form;
