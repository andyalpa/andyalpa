import React from 'react';
import './about.css';
import Me from '../../assets/avatar-2.svg'


const About = () => {



    const skillsArray = [
        { name: 'React', percentage: '90%', color: '#61DBFB' },
        { name: 'JavaScript', percentage: '85%', color: '#F0DB4F' },
        { name: 'Restful APIs', percentage: '80%', color: '#E34F26' },
        { name: 'Flask', percentage: '75%', color: '#000000' }
    ];

    return ( 
        <div className="about container section" id='about'>
        <h2 className="section-title">About Me</h2>
        <div className="about__container grid">
            <img src={Me} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">Hi, I'm Andy Almeida, a passionate Full-Stack Developer from Florida. I thrive on creating innovative web solutions and diving into the latest technologies. 

With expertise in React, JavaScript, Restful APIs, and Flask, I bring a wealth of knowledge and experience to every project. My role as a Team Lead at Walmart has honed my leadership and organizational skills, making me adept at managing projects and collaborating with cross-functional teams. I've successfully implemented new work procedures, fostered positive employee relationships, and optimized team workflows, all of which translate seamlessly into the tech world.

I'm always up for a tech chat, whether it's about the latest gadgets, groundbreaking innovations, or the intricacies of coding. Let's connect and discuss how we can collaborate on innovative projects.</p>
                    <a href="" className="btn">Download CV</a>
                </div>

                <div className="about__skills grid">
                    {skillsArray.map((skill, index) => (
                        <div key={index} className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__number">{skill.percentage}</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage" style={{ width: skill.percentage, backgroundColor: skill.color }}></span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
        </div>
    );
}
 
export default About;