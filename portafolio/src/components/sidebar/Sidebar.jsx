import React from 'react';
import './sidebar.css';
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
    return ( 
        <div className="aside">
            <a href="#home">
                <img src={Logo} alt="Logo" className="logo"/>
            </a>

            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portafolio" className="nav__link">
                                <i className="icon-layers"></i>
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