import React from 'react';
import './services.css';
import Image1 from '../../assets/11494033.png'; //Change this images for the real ones
import Image2 from '../../assets/service-2.svg';

const services = [
    {
      id: 1,
      image: Image1,
      title: "Troubleshooting",
      animation: "fade-right",
      description:
        "I diagnose and fix computer hardware and software issues using various testing methods. This ensures reliable and efficient computer systems, minimizing downtime and maximizing productivity.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      animation: "fade-left",
      description:
        "I build and maintain websites using React for dynamic user interfaces, Python-Flask for backend development, and SQL for database management. This ensures efficient, responsive, and reliable web applications.",
    },

  ];
  

const Services = () => {
    return ( 
        <div className="services container section" id="services">
            <h2 className="section-title">Services</h2>
            <div className="services__container grid">
                {services.map(({ id, image, title, description, animation }) => (
                    <div data-aos={animation} key={id}>
                        <div className="services__card">
                            <img src={image} alt={title} className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;