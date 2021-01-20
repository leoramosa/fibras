import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.5962040575785!2d-77.08956317079495!3d-12.017007099467953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce9717b3851d%3A0x4d598135f5f97c10!2sCalle%20Ostigon%20150%2C%20Cercado%20de%20Lima%2007041!5e0!3m2!1ses-419!2spe!4v1611178118821!5m2!1ses-419!2spe" width="600" height="280" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="google-title"></iframe>
          </div>
          Escríbeme por Whatsapp:
          <div className="whastapp-btn">
            <a className="btn-whatsapp" href="https://api.whatsapp.com/send?phone=51990319569&text=Hola%20quisiera%20m%C3%A1s%20infomacion%20de%20sus%20servicios..." rel="noopener noreferrer" target="_blank">
               <i className="fab fa-whatsapp"></i> Enviame un mensaje
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Form;
