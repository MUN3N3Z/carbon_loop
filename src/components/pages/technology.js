import React from 'react'
import '../technology.css'

export default function Tech() {
    return (
        <>
            <div className="hero-container">
                <video src="/videos/sideview_animation.mp4" autoPlay loop muted/>
            </div>
            <div className="technology-description">
                <div className="title">OUR TECHNOLOGY</div>
                <p>Carbon Loop creates fuels for the hard to decarbonize sectors. By recycling carbon dioxide (CO2) waste back into fuels, we create net-zero fuels for industries that desperately need them. From aviation to cargo shipping, petrochemicals to plastics, we upcycle carbon dioxide into methanol to give these industries a viable path to net-zero. Our mission is to create a scalable, circular, and cost-effective ecosystem for carbon capture and conversion, ultimately creating a Carbon Loop!</p>
                <br/>
                <p>CO2 is sourced from both industrial emitters and the atmosphere.</p>
                <br/>
                <p>Captured CO2 is combined with water and renewable energy in our electrolyzers. </p>
                <br/>
                <ul>Using our proprietary catalyst and electrolyzer technology, the ingredients are transformed into renewable methanol in the first-known one-step electrolytic reduction of carbon dioxide into methanol.</ul>
                <br/>
                <p>Making renewable methanol typically requires multiple steps and the production of gasses which are hard to transport. Our one step process promises to be one of the cheapest ways to produce renewable methanol. As the simplest liquid hydrocarbon, methanol is a great use for our captured carbon dioxide as it can be used directly as a fuel for shipping, easily upgraded into a fuel for aviation, or as the feedstock for many of the chemicals and plastics our society relies on. </p>
                <br/>
                <p>Renewable methanol is one of the building blocks for the circular economy for carbon dioxide. For every gallon of renewable methanol we create, we can displace a gallon of virgin fossil fuels. This chemical can revolutionize the future of long-haul shipping, travel, and consumer products.</p>
            </div>
            
        </>
    )
}