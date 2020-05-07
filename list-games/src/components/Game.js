import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Game.css'

const Game = ({name, image, rating, handleClick, id, screenshots}) => {
    return (
        <figure className="GameCard">
            <button id={id} onClick={handleClick} className="remove_btn"><FontAwesomeIcon icon={faMinusSquare} className="remove_icon" /></button>
            <img src={image} alt={name} />
            <figcaption>
                <blockquote>{name}</blockquote>
                <p><FontAwesomeIcon icon={faStar} className="star_icon" />{rating}</p>
            </figcaption>
            <Link to={{ pathname: `/game/screenshots/:${id}`, state: {screenshots} }} ><button id={id} onClick={handleClick} className="more_btn">More pictures</button></Link>
        </figure>
    )
}

export default Game;