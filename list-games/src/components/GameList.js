import React, { Component }from "react";
import axios from "axios";

import Game from "./Game";

class GameList extends Component {
    render() {
        return (
            <div>
                <Game name="game name" image="https://picsum.photos/200/300" rating="rating" />
            </div>
        )
    }
}

export default GameList;