import React from "react";

import './Game.css'

const Game = ({name, image, rating, handleClick, id}) => {
    return (
        <figure className="GameCard">
            <img src={image} alt={name} />
            <figcaption>
                <blockquote>{name}</blockquote>
                <p>{rating}</p>
            </figcaption>
            <button onClick={() => handleClick(id)}>Remove</button>
        </figure>
    )
}

export default Game;