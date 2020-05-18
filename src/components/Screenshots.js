import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './Screenshots.css'

const Screenshots = (props) => {
    return (
        <div className="screenshots_container" >
            <h1>Screenshots</h1>
            <div className="screenshots_wrapper">
                {props.location.state.screenshots.map(pic => <img src={pic.image} alt="Screenshots" key={pic.id}/>)}
            </div>
            <div className="screenshots_home" ><Link to="/"><FontAwesomeIcon icon={faHome} className="home_icon" /></Link></div>
        </div>
    )
}

export default Screenshots;