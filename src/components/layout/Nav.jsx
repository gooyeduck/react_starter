import React from 'react';
import airbnbLogo from '../../assets/images/airbnb-logo.png';
import "../styles/Nav.css"
export default function Nav(){
    return(
        <div className="nav_container">
            <div className="nav_logo">
            <img src={airbnbLogo} className="airbnb-logo" alt="Airbnb Logo" />
            </div>  
        </div>
    );
}