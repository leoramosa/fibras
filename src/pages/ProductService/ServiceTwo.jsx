import React, { useContext, useState }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'


import ser2 from '../../images/ser2.jpg'
import ModalOne from '../../components/ModalOne'
import ModalTwo from '../../components/ModalTwo'
import ModalThree from '../../components/ModalThree'
import ModalFour from '../../components/ModalFour'
import ModalFive from '../../components/ModalFive'
import ModalSix from '../../components/ModalSix'
import ModalSeven from '../../components/ModalSeven'
import ModalEight from '../../components/ModalEight'
import ModalNine from '../../components/ModalNine'
import ModalTen from '../../components/ModalTen'


const ServiceOne = () => {
  const {state} = useContext(AppContext)
  const { services } = state;
  const { reparaciones } = state;

  const [showModal, setShowModal] = useState(false);
  const [showModaltwo, setShowModaltwo] = useState(false);
  const [showModalthree, setShowModalthree] = useState(false);
  const [showModalfour, setShowModalfour] = useState(false);
  const [showModalfive, setShowModalfive] = useState(false);
  const [showModalsix, setShowModalsix] = useState(false);
  const [showModalseven, setShowModalseven] = useState(false);
  const [showModaleight, setShowModaleight] = useState(false);
  const [showModalnine, setShowModalnine]= useState(false);
  const [showModalten, setShowModalten] = useState(false);

  const OpenModal = () => {
    setShowModal(true);
  };
  const OpenModaltwo = () => {
    setShowModaltwo(true);
  };
  const OpenModalthree = () => {
    setShowModalthree(true);
  };
  const OpenModalfour = () => {
    setShowModalfour(true);
  };
  const OpenModalfive = () => {
    setShowModalfive(true);
  };
  const OpenModalsix = () => {
    setShowModalsix(true);
  };
  const OpenModalseven = () => {
    setShowModalseven(true);
  };
  const OpenModaleight = () => {
    setShowModaleight(true);
  };
  const OpenModalnine = () => {
    setShowModalnine(true);
  };
  const OpenModalten = () => {
    setShowModalten(true);
  };




  const CloseModal = () => {
    setShowModal(false);
  };
  const CloseModaltwo = () => {
    setShowModaltwo(false);
  };
  const CloseModalthree = () => {
    setShowModalthree(false);
  };
  const CloseModalfour = () => {
    setShowModalfour(false);
  };
  const CloseModalfive = () => {
    setShowModalfive(false);
  };
  const CloseModalsix = () => {
    setShowModalsix(false);
  };
  const CloseModalseven = () => {
    setShowModalseven(false);
  };
  const CloseModaleight = () => {
    setShowModaleight(false);
  };
  const CloseModalnine = () => {
    setShowModalnine(false);
  };
  const CloseModalten = () => {
    setShowModalten(false);
  };


  return (
    <>
      <div className="content_service-detail">
        <div className="header-service">
          <div className="header-content">
            <div className="overlay_service">
                <div className="content-title">
                    <p>
                      {services[1].name}
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div className="service_detail_content">
          <div className="service_detail">
              <ul>
                <li>Realizamos reparaciones y manatenimiento a todo de piezas de fibra de vidrio. </li>
              </ul>
              <div className="service_detail_button">
              <div className="detail_request">
                   <div>Consultas: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[1].mensaje}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:fibras.lozano.eirl@gmail.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
                </div>
              <div className="detail_requestTwo">
                Llamanos : <a href="tel://+51944408025" className="btn_call"><i className="fas fa-phone-alt"></i> +51 944 408 025</a>
              </div>
              </div>
          </div>
          <div className="service_detail-img">
            <img src={ser2} alt=""/>
          </div>
        </div>

        <div className="service_gallery">
          <p className="title_gallery two">Trabajos Realizados </p>
         
          <div className="box_title">
          
            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModal}
            key={reparaciones[0].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[0].district}
              <br/>
              {reparaciones[0].place}
              </p>
              <p>{reparaciones[0].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModaltwo}
            key={reparaciones[1].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[1].district}
              <br/>
              {reparaciones[1].place}
              </p>
              <p>{reparaciones[1].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalthree}
            key={reparaciones[2].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[2].district}
              <br/>
              {reparaciones[2].place}
              </p>
              <p>{reparaciones[2].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalfour}
            key={reparaciones[3].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[3].district}
              <br/>
              {reparaciones[3].place}
              </p>
              <p>{reparaciones[3].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalfive}
            key={reparaciones[4].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[4].district}
              <br/>
              {reparaciones[4].place}
              </p>
              <p>{reparaciones[4].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalsix}
            key={reparaciones[5].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[5].district}
              <br/>
              {reparaciones[5].place}
              </p>
              <p>{reparaciones[5].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalseven}
            key={reparaciones[6].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[6].district}
              <br/>
              {reparaciones[6].place}
              </p>
              <p>{reparaciones[6].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModaleight}
            key={reparaciones[7].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[7].district}
              <br/>
              {reparaciones[7].place}
              </p>
              <p>{reparaciones[7].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalnine}
            key={reparaciones[8].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[8].district}
              <br/>
              {reparaciones[8].place}
              </p>
              <p>{reparaciones[8].name}</p>
            </button>

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalten}
            key={reparaciones[9].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[9].district}
              <br/>
              {reparaciones[9].place}
              </p>
              <p>{reparaciones[9].name}</p>
            </button>

           
            
           

           
            
          </div>
        </div>


        <ModalOne CloseModal={CloseModal} showModal={showModal}/>
        <ModalTwo CloseModaltwo={CloseModaltwo} showModaltwo={showModaltwo}/>
        <ModalThree CloseModalthree={CloseModalthree} showModalthree={showModalthree}/>
        <ModalFour CloseModalfour={CloseModalfour} showModalfour={showModalfour}/>
        <ModalFive CloseModalfive={CloseModalfive} showModalfive={showModalfive}/>
        <ModalSix CloseModalsix={CloseModalsix} showModalsix={showModalsix}/>
        <ModalSeven CloseModalseven={CloseModalseven} showModalseven={showModalseven}/>
        <ModalEight CloseModaleight={CloseModaleight} showModaleight={showModaleight}/>
        <ModalNine CloseModalnine={CloseModalnine} showModalnine={showModalnine}/>
        <ModalTen CloseModalten={CloseModalten} showModalten={showModalten}/>
          
    </div>
    </>
  )
}

export default ServiceOne;
