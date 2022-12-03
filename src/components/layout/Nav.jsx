import React from 'react';
import reactLogo from '../../assets/react.svg';
import "../styles/Nav.css"
export default function Nav(){
    return(
        <div className="nav_container">
            <div className="nav_logo">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h2>ReactFacts</h2>
            </div>
            <div className="nav-list">
            <h2>React Crash Course</h2>
            </div>
            
           
        </div>
    );
}