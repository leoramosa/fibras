
import React,  { useContext }  from 'react'
import {Link} from 'react-router-dom'
import AppContext from "../context/AppContext";
// Import Swiper React components
import 'swiper/swiper.scss';
import './styles/services.css'

import coverservice from '../images/coverservice1.png'
import coverservice2 from '../images/coverservice2.png'
import coverservice3 from '../images/coverservice3.png'
import coverservice4 from '../images/coverservice4.png'
import coverservice5 from '../images/coverservice5.png'
import coverservice6 from '../images/coverservice6.png'
import coverservice10 from '../images/coverservice10.png'
import coverservice11 from '../images/coverservice11.png'
import coverservice12 from '../images/coverservice12.png'


function Services () {
  const {state} =useContext(AppContext)
  const { services } = state;
  console.log(services)
  
  return (
    <>
      <div className="content_services">
          <div className="title-event">
            <p>
              Mis servicios
            </p>
          </div>
          <div className="row_service one">
          <div className="content-service-g">
                  <div className="services_all" >
                    <div className="wrapper_all">
                    <p className="detail-title">{services[0].name}</p>
                    <div className="breve">{services[0].breve}</div>
                    <div className="content-button">
                        <div className="content-bo">
                          <button className="button-whatsapp" type="button">
                            <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[0].mensaje}`} rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-whatsapp"></i> {services[0].buttontype}
                            </a>
                          </button> 
                        </div>
                        <div className="content-bt">
                          <Link className="detail-ver" to="/one" >ver más</Link>
                        </div>
                    </div>
                    </div>
                    <div className="wrapper_two">
                      <div className="wrapper_img">
                        <img className="" src={coverservice} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice2} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice3} alt=""/>
                      </div>
                    </div>
                   </div>
          </div>
          </div>
          <div className="row_service two">
          <div className="content-service-g">
                  <div className="services_all" >
                    <div className="wrapper_all">
                    <p className="detail-title">{services[1].name}</p>
                    <div className="breve">{services[1].breve}</div>
                    <div className="content-button">
                        <div className="content-bo">
                          <button className="button-whatsapp" type="button">
                            <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[1].mensaje}`} rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-whatsapp"></i> {services[1].buttontype}
                            </a>
                          </button> 
                        </div>
                        <div className="content-bt">
                          <Link className="detail-ver" to="/one" >ver más</Link>
                        </div>
                    </div>
                    </div>
                    <div className="wrapper_two">
                      <div className="wrapper_img">
                        <img className="" src={coverservice4} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice5} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice6} alt=""/>
                      </div>
                    </div>
                   </div>
          </div>
          </div>
          <div className="row_service one">
          <div className="content-service-g">
                  <div className="services_all" >
                    <div className="wrapper_all">
                    <p className="detail-title">{services[2].name}</p>
                    <div className="breve">{services[2].breve}</div>
                    <div className="content-button">
                        <div className="content-bo">
                          <button className="button-whatsapp" type="button">
                            <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[2].mensaje}`} rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-whatsapp"></i> {services[2].buttontype}
                            </a>
                          </button> 
                        </div>
                        <div className="content-bt">
                          <Link className="detail-ver" to="/one" >ver más</Link>
                        </div>
                    </div>
                    </div>
                    <div className="wrapper_two">
                      <div className="wrapper_img">
                        <img className="" src={coverservice} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice2} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice3} alt=""/>
                      </div>
                    </div>
                   </div>
          </div>
          </div>
          <div className="row_service two">
          <div className="content-service-g">
                  <div className="services_all" >
                    <div className="wrapper_all">
                    <p className="detail-title">{services[3].name}</p>
                    <div className="breve">{services[3].breve}</div>
                    <div className="content-button">
                        <div className="content-bo">
                          <button className="button-whatsapp" type="button">
                            <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51944408025&text=${services[3].mensaje}`} rel="noopener noreferrer" target="_blank">
                              <i className="fab fa-whatsapp"></i> {services[3].buttontype}
                            </a>
                          </button> 
                        </div>
                        <div className="content-bt">
                          <Link className="detail-ver" to="/one" >ver más</Link>
                        </div>
                    </div>
                    </div>
                    <div className="wrapper_two">
                      <div className="wrapper_img">
                        <img className="" src={coverservice10} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice11} alt=""/>
                      </div>
                      <div className="wrapper_img">
                        <img className="" src={coverservice12} alt=""/>
                      </div>
                    </div>
                   </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default Services;