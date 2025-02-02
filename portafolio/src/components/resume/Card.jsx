import React from 'react'

const Card = ({icon, year, title, description, subtitle}) => {
  return (
    <div className="timeline__item">
        <i className={icon}></i>
        <span className="timeline__date">{year}</span>
        <h3 className="timeline__title">{title}</h3>
        <h1 className="timeline__subtitle">{subtitle}</h1>
        <p className="timeline__text">{description}</p>
    </div>
  )
}

export default Card