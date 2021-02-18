import React, {useContext} from 'react';
import  AppContext   from '../context/AppContext';
import ReactDOM from 'react-dom';
import { SRLWrapper } from 'simple-react-lightbox';

/* import CheckIcon from '@material-ui/icons/Check'; */
import './styles/ModalOne.css';



const ModalTwo = (props) =>{
  const {state} = useContext(AppContext)
  const { services } = state;
  
  if (!props.showModaltwo) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container animate__animated animate__bounce animate__flipInY">
        <button onClick={props.CloseModaltwo} className="Modal__close-button">
          X
        </button>
        <div className="Modal__container-element">
          <div className="element__description">
          <div className="title-event-place">
            <div className="line_color"></div>
            <p>
            <i class="fas fa-map-marker-alt"></i> Callao | Pintado de Tina de baño 
            </p>
          </div>
          <SRLWrapper >
            <div  className="wrapperImg">
          {services[1].imagentwo.map((service, i) => (
              <div key={i} className="img-small">
                <div className="overlay_service_one">
                <i class="fas fa-search"></i>
                </div>
                <img src={service.img} alt=""/>
              </div>
              ))}
              </div>
           </SRLWrapper>
            

          </div>
        </div>
      </div>
    </div>,
    document.getElementById('ModalTwo')
  );
}

export default ModalTwo;
