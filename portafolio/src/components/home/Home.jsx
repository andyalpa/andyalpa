import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import Socials from './Socials'
import { Scrolling } from './Scrolling'

const Home = () => {
  return (
    <div className="home container" id='home'>
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Andy Almeida</h1>
                <span className="home__education">I am a Full-Stack Developer</span>
        </div>
        
        <Socials />

        <a href="#contact" className="btn">Hire Me</a>

        <Scrolling />
    </div>
  )
}

export default Home