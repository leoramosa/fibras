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
import ModalEleven from '../../components/ModalEleven';
import ModalTwelve from '../../components/ModalTwelve';
import ModalThirteen from '../../components/ModalThirteen';
import ModalFourteen from '../../components/ModalFourteen';
import ModalFifteen from '../../components/ModalFifteen';
import ModalSixteen from '../../components/ModalSixteen';


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

  const [showModaleleven, setShowModaleleven] = useState(false);
  const [showModaltwelve, setShowModaltwelve] = useState(false);
  const [showModalthirteen, setShowModalthirteen] = useState(false);
  const [showModalfourteen, setShowModalfourteen] = useState(false);
  const [showModalfifteen, setShowModalfifteen] = useState(false);
  const [showModalsixteen, setShowModalsixteen] = useState(false);

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
  const OpenModaleleven = () => {
    setShowModaleleven(true);
  };
  const OpenModaltwelve = () => {
    setShowModaltwelve(true);
  };
  const OpenModalthirteen = () => {
    setShowModalthirteen(true);
  };
  const OpenModalfourteen = () => {
    setShowModalfourteen(true);
  };
  const OpenModalfifteen = () => {
    setShowModalfifteen(true);
  };
  const OpenModalsixteen = () => {
    setShowModalsixteen(true);
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
  const CloseModaleleven = () => {
    setShowModaleleven(false);
  };
  const CloseModaltwelve = () => {
    setShowModaltwelve(false);
  };
  const CloseModalthirteen = () => {
    setShowModalthirteen(false);
  };
  const CloseModalfourteen = () => {
    setShowModalfourteen(false);
  };
  const CloseModalfifteen = () => {
    setShowModalfifteen(false);
  };
  const CloseModalsixteen = () => {
    setShowModalsixteen(false);
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
                <li>Realizamos reparaciones y mantenimiento de todo tipo de piezas en fibra de vidrio como:
                piscinas, jacuzzis, tinas de baño, hidromasajes, yates, escaleras telescópicas, lavatorios, etc y
                todo lo relacionado a la fibra de vidrio.</li>
              </ul>
              <div className="service_detail_button">
              <div className="detail_request">
                   <div>Consultas: </div> <div className="content-link-request"><a className="whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[1].mensaje}`} rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> whatsapp </a> <a className="btn_email" href="mailto:fibras.lozano.eirl@gmail.com"  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i> correo</a></div> 
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

            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModaleleven}
            key={reparaciones[10].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[10].district}
              <br/>
              {reparaciones[10].place}
              </p>
              <p>{reparaciones[10].name}</p>
            </button>


            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModaltwelve}
            key={reparaciones[11].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[11].district}
              <br/>
              {reparaciones[11].place}
              </p>
              <p>{reparaciones[11].name}</p>
            </button>


            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalthirteen}
            key={reparaciones[12].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[12].district}
              <br/>
              {reparaciones[12].place}
              </p>
              <p>{reparaciones[12].name}</p>
            </button>


            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalfourteen}
            key={reparaciones[13].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[13].district}
              <br/>
              {reparaciones[13].place}
              </p>
              <p>{reparaciones[13].name}</p>
            </button>


            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalfifteen}
            key={reparaciones[14].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[14].district}
              <br/>
              {reparaciones[14].place}
              </p>
              <p>{reparaciones[14].name}</p>
            </button>


            <button 
            type="button" 
            className="box_title-container"
            onClick={OpenModalsixteen}
            key={reparaciones[15].id}
            >
              <p>
               <i className="fas fa-map-marker-alt"></i> {reparaciones[15].district}
              <br/>
              {reparaciones[15].place}
              </p>
              <p>{reparaciones[15].name}</p>
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
        <ModalEleven CloseModaleleven={CloseModaleleven} showModaleleven={showModaleleven}/>
        <ModalTwelve CloseModaltwelve={CloseModaltwelve} showModaltwelve={showModaltwelve}/>
        <ModalThirteen CloseModalthirteen={CloseModalthirteen} showModalthirteen={showModalthirteen}/>
        <ModalFourteen CloseModalfourteen={CloseModalfourteen} showModalfourteen={showModalfourteen}/>
        <ModalFifteen CloseModalfifteen={CloseModalfifteen} showModalfifteen={showModalfifteen}/>
        <ModalSixteen CloseModalsixteen={CloseModalsixteen} showModalsixteen={showModalsixteen}/>
          
    </div>
    </>
  )
}

export default ServiceOne;
