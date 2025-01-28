import React from 'react';
import './projects.css';
import project1 from '../../assets/1737677530704.jpg';
import project2 from '../../assets/1737679277098.jpg';
import project3 from '../../assets/1737679118271.jpg';

const Projects = () => {

    const ProjectsArray = [
      {
        name: "Fitness Friends",
        id: 1,
        githubWebsite: "https://github.com/andyalpa/FitnessFriend",
        liveDemo: "https://fitness-friends.netlify.app/",
        image: project2,
      },
      {
        name: "Asteroids",
        id: 2,
        githubWebsite: "https://github.com/andyalpa/Asteroids",
        liveDemo: "https://andyalpa.github.io/Asteroids/",
        image: project1,
      },
      {
        name: "Mokepon",
        id: 3,
        githubWebsite: "https://github.com/andyalpa/mokepon",
        liveDemo: "https://mokepon.netlify.app/",
        image: project3,
      },
    ];

    return ( 
        <div className="projects container section" id='projects'>
            <h2 className="section__title">Recent Projects</h2>
            <div className="projects__filters">
                <span className="project__item"></span>
            </div>

            <div className="projects__container grid">
                {ProjectsArray.map((project, index) => (
                    <div className="project__card" key={index}>
                        <div className="project__thumbnail">
                            <img src={project.image} alt="" className="project__img" />
                            <div className="project__mask"></div>
                        </div>
                        <h3 className="project__title">{project.name}</h3>
                        <a href={project.githubWebsite} className="project__btn">
                            <i className="icon-link project__btn-icon"></i>
                        </a>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Projects;