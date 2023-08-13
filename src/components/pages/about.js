import React from 'react';
import '../about.css';
import Card from '../card';

function About() {
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
                <div> 
                    <p className='title'>OUR VISION</p>
                </div>
                <div>
                    <p className='company-description'>
                        A circular economy for Carbon Dioxide
                    </p>
                </div>
            </div>
            <div className="founders-section">
                <div>
                    <p className='title'> OUR FOUNDERS</p>
                </div>
                <div className="founder-cards">
                    <Card 
                    name="Conor Rooney" 
                    job="Cofounder"
                    image_link="/images/Conor_Rooney.jpg"
                    school_1="B.A. Pomona College '19"
                    school_2="M.S. Yale University '21"
                    school_3="Ph.D. Yale University '24"
                    background="Conor is a scientist and entrepreneur developing electrolysis technology to convert harmful carbon emissions into green chemicals and fuels for the decarbonization of industry. He has published 10+ research articles in the area of CO2 conversion and is a skilled research professional in electrochemistry, catalysis, and nanomaterials."
                    />
                    <div className="spacer-block"/>
                    <Card 
                    name="Perry Bakas" 
                    job="Cofounder"
                    image_link="/images/Perry_Bakas.jpg"
                    school_1="B.Eng. Vanderbilt University '18"
                    school_2="M.B.A Yale University '24"
                    school_3={""}
                    background={"For the past 5 years, Perry has worked on the commercial strategy and deployment of climate technologies and startups. He has led the origination, acquisition, and development of hundreds of millions of dollars of renewable energy assets, built and commercialized four climate technologies, and has spent years advising and investing in climate startups across multiple funds."}
                    />
                    <div className="spacer-block"/>
                    <Card 
                    name="Harrison Meyer" 
                    job={"Cofounder"}
                    image_link={"/images/Harrison_Meyer.jpg"}
                    school_1={"B.S. Boston University"}
                    school_2={"MBA/MEM Yale University"}
                    school_3={""}
                    background={"Harrison started his career in sustainable development and environmental engineering. He has worked developing biofuels, commercialization of carbon capture technologies and energy storage. He has background in investing and advising climate and cleantech companies and investment funds."}/>               
                </div>
            </div>
            
    </div>
    )
}


export default About;