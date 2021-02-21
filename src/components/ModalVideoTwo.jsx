import React from 'react';

import ReactDOM from 'react-dom';

/* import CheckIcon from '@material-ui/icons/Check'; */
import './styles/ModalOne.css';
/* video */
import VideoPlayer from 'react-video-js-player';



const ModalVideoTwo = (props) =>{

  const videoSrc = "https://apiweb.netlify.app/images/fibras/servicios/1/video-two.mp4";
  const poster =
  "https://apiweb.netlify.app/images/fibras/servicios/1/19.jpg";
  
  if (!props.showModalvideo2) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal ">
      <div className="Modal__container animate__animated animate__bounce animate__flipInY">
        <button onClick={props.CloseModalvideo2} className="Modal__close-button">
          X
        </button>
        <div className="Modal__container-element">

          <div className="element__description">
          <div className="title-event-place">
            <div className="line_color"></div>
            <p>
            Saunas Unipersonales
            </p>
          </div>
         
            <div  className="wrapperImg">
            <VideoPlayer
              src={videoSrc}
              poster={poster}
              className="videoPlayer"
            />
              </div>
          
            

          </div>
        </div>
      </div>
    </div>,
    document.getElementById('ModalVideoTwo')
  );
}

export default ModalVideoTwo;
