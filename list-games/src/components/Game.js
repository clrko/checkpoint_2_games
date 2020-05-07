import React from "react";
import { Link } from 'react-router-dom';

import './Game.css'

const Game = ({name, image, rating, handleClick, id, screenshots}) => {
    return (
        <figure className="GameCard">
            <img src={image} alt={name} />
            <figcaption>
                <blockquote>{name}</blockquote>
                <p>{rating}</p>
            </figcaption>
            <button id={id} onClick={handleClick}>Remove</button>
            <Link to={{ pathname: `/game/screenshots/:${id}`, state: {screenshots} }} >Additional images</Link>
        </figure>
    )
}

export default Game;