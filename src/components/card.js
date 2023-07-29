import React from 'react'
import './card.css'

export default function Card({name, job, background}) {

  return (
    <div className="Card">
        <div className="upper-container">
            <div className="image-container">
                <img src="https://picsum.photos/id/1/100/100" alt="founder"/>
            </div>
        </div>
        <div className="lower-container">
            <h3> {name} </h3>
            <h4> {job} </h4>
            <p> {background} </p>
        </div>
    </div>
  )
}
