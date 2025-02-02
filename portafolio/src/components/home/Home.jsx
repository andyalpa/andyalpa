import React from 'react'
import './home.css'
import Me from '../../assets/558d5722c0b84e7b41e53bf8158be2df-xlarge.jpg'
import Socials from './Socials'
import { Scrolling } from './Scrolling'


const Home = () => {
  return (
    <div className="home container" id='home'>
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Andy Almeida</h1>
                <span className="home__education">I am a Full-Stack Developer</span>
        
        
        <Socials />

        <a href="#contact" className="btn">Hire Me</a>

        <Scrolling />
        </div>

       
    </div>
  )
}

export default Home