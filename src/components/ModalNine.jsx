import React, {useContext} from 'react';
import  AppContext   from '../context/AppContext';
import ReactDOM from 'react-dom';
import { SRLWrapper } from 'simple-react-lightbox';

/* import CheckIcon from '@material-ui/icons/Check'; */
import './styles/ModalOne.css';



const ModalNine = (props) =>{
  const {state} = useContext(AppContext)
  const { services } = state;
  const { reparaciones } = state;
  
  if (!props.showModalnine) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal ">
      <div className="Modal__container animate__animated animate__bounce animate__flipInY">
        <button onClick={props.CloseModalnine} className="Modal__close-button">
          X
        </button>
        <div className="Modal__container-element">

          <div className="element__description">
          <div className="title-event-place">
            <div className="line_color"></div>
            <p>
            <i class="fas fa-map-marker-alt"></i> {reparaciones[8].district} - {reparaciones[8].place} | {reparaciones[8].name}
            </p>
          </div>
          <SRLWrapper >
            <div  className="wrapperImg">
          {services[1].imagennine.map((service, i) => (
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
    document.getElementById('ModalNine')
  );
}

export default ModalNine;
