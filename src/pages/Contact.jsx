import React from 'react';
import Form from '../components/forms/Form'
import './styles/contact.css'
export default function Contact() {



  return (
    <div className="content_service-detail">
    <div className="header-contact-1">
          <div className="header-content">
            <div className="overlay_content">
                <div className="content-title">
                    <p>
                      Contacto
                    </p>
                </div>
              </div>
          </div>
        </div>
    <div className="contact-content">

    <Form/>
    </div>
    </div>
  );
}