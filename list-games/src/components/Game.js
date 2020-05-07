import React from "react";

import './Game.css'

const Game = ({name, image, rating}) => {
    return (
        <figure className="GameCard">
            <img src={image} alt={name} />
            <figcaption>
                <blockquote>{name}</blockquote>
                <p>{rating}</p>
            </figcaption>
        </figure>
    )
}

export default Game;