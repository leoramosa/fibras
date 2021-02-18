import React from 'react'
import { Link } from 'react-router-dom'
import './styles/about.css'

import mision from '../images/mision.jpg'
import vision from '../images/vision.jpg'

 const Home = () => {
  return (
    <>
      <div className="content_about">
        
          
          <div className="about-header">
          <div className="about_overlay">
          <div className="about_container">
              <p className="about_title">Nuestra <strong>Historia</strong></p>
              <p className="about_info">Nuestra experiencia en los servicios de fibra de Vidrio </p>
              <br/>
              <div className="link_contact">
              <Link to="/contacto" className="" >
                <button className="contact_link" type="button">
                Contáctanos
                </button>
              </Link>
              </div>
             
            </div>
          </div>
        </div>

        <div className="about_information_web">
           <div className="content_info-about">
             <p>
            Fibras Lozano E.I.R.L. Somos una empresa familiar con más de 25 años de experiencia, comprometidos con el desarrollo y crecimiento de nuestros clientes, con la firme proyección de dar soluciones en productos de fibra de vidrio (PRFV), a particulares, medianas y grandes empresas. El objetivo principal es proyectar diseños y fabricar productos que cumplan fielmente con las necesidades y expectativas de nuestros clientes.
            En la actualidad nuestra empresa se encuentra totalmente abierta a nuevos desafíos y la posibilidad de ofrecer cada uno de nuestros productos y servicios, a quienes necesiten soluciones en fibra de vidrio.
             </p>
           </div>
           <div className="about-mision">
             <div className="mision-left">
               <img src={mision} alt=""/>
             </div>
             <div className="mision-right">
               <p className="title_mision">Misión</p>
               <p className="info_mision">Transformar las ideas de nuestros clientes en productos innovadores de Fibra de Vidrio de larga duración y buenos acabados, garantizando un trabajo de alta calidad.</p>
             </div>
           </div>
           <div className="about-vision">
             
             <div className="vision-left">
               <p className="title_vision">Visión</p>
               <p className="info_vision">Posicionarnos como una de las más reconocidas empresas fabricante de productos en Fibra de Vidrio gracias a nuestro conocimiento en el rubro de fabricación, reparación, mantenimiento en piezas de Fibra de vidrio, durante tantos años de arduo trabajo. </p>
             </div>
             <div className="vision-right">
             <img src={vision} alt=""/>
             </div>
           </div>
          </div>
        
      </div>
    </>
  )
}

export default Home;