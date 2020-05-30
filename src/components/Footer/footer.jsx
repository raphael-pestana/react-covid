import React from 'react'

import Coroninha from "../../images/coroninha.png"
import './footer-style.css'

const Footer = () => {
    return(
        <div className="ft-style">
            <div className="ft-container">
                <div className="ft-logo">
                    <img className="img-logo" src={Coroninha} alt="Corona Logo"/>
                </div>
            </div>

            <div className="ft-social">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-github-square"></i>
            </div>
        </div>

    );
    
}

export default Footer