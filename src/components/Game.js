import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Game.css'

const Game = ({name, image, rating, handleClick, id, screenshots}) => {
    return (
        <figure className="GameCard">
            <button id={id} onClick={handleClick} className="remove_btn">X</button>
            <img src={image} alt={name} />
            <figcaption>
                <blockquote>{name}</blockquote>
                <p><FontAwesomeIcon icon={faStar} className="star_icon" />{rating}</p>
            </figcaption>
            <div><Link to={{ pathname: `/game/screenshots/:${id}`, state: {screenshots} }}><button className="more_btn">More pictures</button></Link></div>
        </figure>
    )
}

export default Game;