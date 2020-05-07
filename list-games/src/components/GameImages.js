import React from "react";

/* import './Game.css' */

const GameImages = (props) => {
    const screenshots = props.location.state
    return (
        <div>
            {screenshots.map(pic => <img src={pic.image} alt="Screenshot" />)}
        </div>
    )
}

export default GameImages;