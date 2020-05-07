import React from "react";
import { Link } from "react-router-dom";

const Screenshots = (props) => {
    return (
        <div>
            <Link to="/">Go back Home</Link>
            {props.location.state.screenshots.map(pic => <img src={pic.image} alt="Screenshots" />)}
        </div>
    )
}

export default Screenshots;