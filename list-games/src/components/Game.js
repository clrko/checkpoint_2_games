import React from "react";

import './Game.css'

const Game = () => {
    return (
        <figure className="GameCard">
            <img src="https://picsum.photos/200/300" alt="laceholder" />
            <figcaption>
                <blockquote>game name</blockquote> {/* name */} 
                <p>rating</p> {/* rating */}
            </figcaption>
        </figure>
    )
}

export default Game;