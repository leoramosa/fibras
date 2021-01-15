import React from 'react'
import './styles/home.css'
import Pool from '../images/pool.mp4'
import Testimonials from '../components/Testimonials'

 const Home = () => {
  return (
    <>

      <div className="">
        <div className="header_home">
          <video id="videoRgb" autoPlay muted loop>
            <source src={Pool} type="video/mp4"/>
          </video>
          <div className="overlay"></div>
          <div className="element-home">
          Realizamos todo tipo de Trabajos -Fabricacion Reparaciones y Mantenimiento en fibra de vidrio
          </div>
        </div>
        <div>
          <Testimonials/>
        </div>
      </div>

    </>
  )
}

export default Home;