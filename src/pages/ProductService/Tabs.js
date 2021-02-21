import React, { useContext, useState }from 'react'
import  AppContext   from '../../context/AppContext';
import "./styles/Tab.css";
import { SRLWrapper } from 'simple-react-lightbox';
import ModalVideoOne from '../../components/ModalVideoOne'
import ModalVideoTwo from '../../components/ModalVideoTwo'
function Tabs() {
  const {state} = useContext(AppContext)
  const { services } = state;
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [showModalvideo1, setShowModalvideo1] = useState(false);
  const [showModalvideo2, setShowModalvideo2] = useState(false);

  const OpenModalvideo1 = () => {
    setShowModalvideo1(true);
  };
  const OpenModalvideo2 = () => {
    setShowModalvideo2(true);
  };

  const CloseModalvideo1 = () => {
    setShowModalvideo1(false);
  };
  const CloseModalvideo2 = () => {
    setShowModalvideo2(false);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Fotos
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Videos
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          
          <SRLWrapper >
                    <div className="wrapperImg">
                        {services[0].imagen.map((service, i) => (
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

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          
          <div  className="img-small video"
          onClick={OpenModalvideo1}>
                      <div className="overlay_service_two">
                        <i className="fab fa-youtube"></i>
                      </div>
                      <img src="https://apiweb.netlify.app/images/fibras/servicios/1/19.jpg" alt=""/>
          </div>
          <div  className="img-small video"
          onClick={OpenModalvideo2}>
                      <div className="overlay_service_two">
                        <i className="fab fa-youtube"></i>
                      </div>
                      <img src="https://apiweb.netlify.app/images/fibras/servicios/1/18.jpg" alt=""/>
          </div>
        </div>
      </div>
      <ModalVideoOne CloseModalvideo1={CloseModalvideo1} showModalvideo1={showModalvideo1}/>
      <ModalVideoTwo CloseModalvideo2={CloseModalvideo2} showModalvideo2={showModalvideo2}/>
    </div>
  );
}

export default Tabs;