import React from 'react'
import './card.css'

export default function Card({name, job, image_link, background, school_1, school_2, school_3}) {

  return (
    <div className="Card">
        <div className="upper-container">
            <div className="image-container">
                <img src={image_link} alt="founder"/>
            </div>
        </div>
        <div className="lower-container">
            <h3> {name} </h3>
            <h4> {job} </h4>
            <h4> {school_1} </h4>
            <h4> {school_2} </h4>
            <h4> {school_3} </h4>
            <p> {background} </p>
        </div>
    </div>
  )
}
