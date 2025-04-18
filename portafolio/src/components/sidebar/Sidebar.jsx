import React from 'react';
import './sidebar.css';
import Darkmode from '../Darkmode';

const Sidebar = () => {
    return ( 
        <div className="aside">
            <div className='darkmode'>
                <Darkmode/>
            </div>

            

            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#testimonials" className="nav__link">
                                <i className="icon-bubbles"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-note"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
            
            <div className="nav__footer">
                <span className="copyright">&copy; 2025 -2026</span>
            </div>

        </div>
     );
}
 
export default Sidebar;