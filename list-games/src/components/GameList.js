import React, { Component }from "react";
import axios from "axios";

import Game from "./Game";

class GameList extends Component {
    state = {
        GameFullList: []
    }

    componentDidMount() {
        this.getGameList()
    }

    getGameList = () => {
        axios.get("https://wild-games.herokuapp.com/api/v1")
        .then(res => this.setState(() => ({GameFullList: res.data}), () => console.log(this.state.GameFullList)))
    }

    render() {
        return (
            <div>
                {this.state.GameFullList.map(game => <Game name={game.name} image={game.background_image} rating={game.rating} key={game.id} />)}
            </div>
        )
    }
}

export default GameList;