import React from 'react';
import {Button} from './button';
import './heroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/reveal_animation_2.mp4" autoPlay loop muted/>
            <div className="hero-btns">
                <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                LEARN MORE
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;