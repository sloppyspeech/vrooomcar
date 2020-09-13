import React from 'react';
import './LandingPage.scss';
const LandingPage = () => {
    return (
        <div className="background-image-container">
            <img src="/images/main-page-car.jpg" alt="Snow" className="background-image"></img>
            <div className="centered">Let's Vroooooom.....</div>
            <div className="centered-input">
                <input placeholder="  Where To...." style={{height:'3rem'}}></input>
            </div>
            <div className="right-arrow">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    );
};

export default LandingPage;