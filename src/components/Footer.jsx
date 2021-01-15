import React from 'react'
import './styles/footer.css'

 const Footer = () => {
  return (
    <>
     <div className="content_footer">
      <div className="content-layout">

      
       <div className="content_info">
         {/* <div className="info">
           <p className="title-info">Contáctame</p>
           <div className="">
            <p>Teléfono: +51 990319569</p>
            <p>Email: alexia@piscesntonic.com</p>
            <p>Direción: Trujillo - Perú</p>
           </div>
         </div> */}
         {/* <div className="redes">
            <p className="title-info">Sígueme:</p>
            <div className="icon-redes">
              <a href="https://www.facebook.com/piscesntonic" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/piscesntonic/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>

            </div>
         </div> */}
         {/* <div className="explorer">
           <p className="title-info">Destacados</p>
           <div className="link-footer">
            <Link className="footerLink" to="/conoceme"><p>Conóceme</p></Link> 
            <Link className="footerLink" to="/servicios"><p>Servicios</p></Link> 
             
           </div>
         </div> */}
       </div>
       <div className="derechos desktop">
         <p>© Copyright Fibras Lozano 2020 -Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>
       <div className="derechos mobile">
         <p>© Copyright Pisces & Tonic 2020
           <br/>
           Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>
       </div>
     </div>
    </>
  )
}

export default Footer;
