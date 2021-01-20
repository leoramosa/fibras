import React from 'react'
import './styles/footer.css'

 const Footer = () => {
  return (
    <>
     <div className="content_footer">
      <div className="content-layout">

      
       <div className="content_info">
       <div className="explorer">
           <p className="title-info">Nosotros</p>
           <div className="link-footer">
             <p className="footer-about">
             Fibras Lozano E.I.R.L. Somos una empresa familiar con más de 25 años de experiencia, comprometidos con el desarrollo y crecimiento de nuestros clientes.
             </p>

           </div>
         </div>
         <div className="info">
           <p className="title-info">Contacto</p>
           <div className="">
            <p>Teléfono: +51 944408025</p>
            <p>Email: emerson.loza.reate.37@gmail.com</p>
            <p>Direción: Lima - Perú</p>
           </div>
         </div>
         <div className="redes">
            <p className="title-info">Sígueme:</p>
            <div className="icon-redes">
              <a href="https://www.facebook.com/Fibras-Lozano-EIRL-110516780696841" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a href="https://www.facebook.com/Fibras-Lozano-EIRL-110516780696841" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>

            </div>
         </div>
         
       </div>
       <div className="derechos desktop">
         <p>© Copyright Fibras Lozano 2020 -Todos los derechos reservados</p>
         <p className="diseño">Diseñado y desarrollado por <a className="dweb" href="https://leoramos.netlify.app/" target="_blank" rel="noreferrer"> Leonardo Ramos</a></p>
       </div>
       </div>
     </div>
    </>
  )
}

export default Footer;
