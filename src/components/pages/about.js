import React, { useState } from 'react';
import '../about.css';
import Card from '../card';
import { founders_data } from '../founders_data';

function About() {
    const [founders, setFounders] = useState(founders_data)
    return(
        <div className='about-container'>
            <div className="company-section">
                <div> 
                    <p className='title'>OUR COMPANY</p>
                </div>
                <div>
                    <p className='company-description'>
                        Carbon Loop is on a mission to make carbon capture and conversion circular, scalable, and competitive by creating renewable methanol from captured carbon dioxide through our proprietary one-step process.
                    </p>
                </div>
            </div>
            <div className="founders-section">
                <div>
                    <p className='title'> OUR FOUNDERS</p>
                </div>
                <div className="founder-cards">
                    <ul className="founders-container">
                        {founders.map((founder) => (
                            <Card {...founder} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default About;