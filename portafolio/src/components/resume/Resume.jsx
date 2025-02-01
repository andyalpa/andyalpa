import React from 'react';
import './resume.css';
import Card from './Card';

const Resume = () => {
    const experiences = [
        {
            id: 1,
            category: "education",
            year: "2015",
            title: "Bachillerato",
            icon: "icon-graduation",
            subtitle: "Colegio San Jose de Calasanz",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 1,
            category: "education",
            year: "2015",
            title: "Bachillerato",
            icon: "icon-graduation",
            subtitle: "Colegio San Jose de Calasanz",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 1,
            category: "education",
            year: "2015",
            title: "Bachillerato",
            icon: "icon-graduation",
            subtitle: "Colegio San Jose de Calasanz",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 2,
            category: "experience",
            year: "2016 - 2020",
            title: "Ingenieria de Sistemas",
            icon: "icon-briefcase",
            subtitle: "Universidad de la Amazonia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 3,
            category: "experience",
            year: "2021 - 2022",
            title: "Desarrollo Web Frontend",
            icon: "icon-briefcase",
            subtitle: "Platzi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 3,
            category: "experience",
            year: "2021 - 2022",
            title: "Desarrollo Web Frontend",
            icon: "icon-briefcase",
            subtitle: "Platzi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
    ];

    return ( 
        <div className="resume container section" id='resume'>
            <h2 className="section-title">Experience</h2>

            <div className="resume__container grid">

                <div className="timeline grid">
                    {experiences.map((experience, id) => {
                        if (experience.category === "education") {
                            return (
                                <Card key={id} icon={experience.icon} title={experience.title} year={experience.year} description={experience.description}/>
                            )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {experiences.map((experience, index) => {
                        if (experience.category === "experience") {
                            return (
                                <Card key={index} icon={experience.icon} title={experience.title} year={experience.year} description={experience.description}/>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Resume;