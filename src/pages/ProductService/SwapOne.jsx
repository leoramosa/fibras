import React, { useContext }from 'react'
import { SRLWrapper } from 'simple-react-lightbox';
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'


const SwapOne = () => {
  const {state} = useContext(AppContext)
const { services } = state;
  return (
    <>
      <SRLWrapper id="2" className="wrapperImgtwo">
          {services[1].imagentwo.map((service, i) => (
              <div key={i} className="img-small">
                <div className="overlay_service_one">
                <i class="fas fa-search"></i>
                </div>
                <img src={service.img} alt=""/>
              </div>
              ))}
           </SRLWrapper>
    </>
  )
}

export default SwapOne;