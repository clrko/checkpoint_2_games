import React, { useState, useEffect }from "react";
import axios from "axios";

import Game from "./Game";

import "./GameList.css"

const GameList = () => {
    const [gameList, setGameList] = useState([])

    const getGameList = () => {
        axios.get("https://wild-games.herokuapp.com/api/v1")
        .then(res => setGameList(res.data))
    }
    
    useEffect(getGameList,[])

    const handleClick = (e) => {
        const listTemp = [...gameList]
        const index = listTemp.findIndex(item => item.id === parseInt(e.target.id))
        const remove = window.confirm("Are you sure you want to remove this game from the list?")
        if (remove) {
            listTemp.splice(index, 1)
            setGameList(listTemp)
        }
    }

    return (
        <div className="gameCard_wrapper">
            {gameList.map(game => <Game name={game.name} image={game.background_image} rating={game.rating} key={game.id} id={game.id} handleClick={handleClick}/>)}
        </div>
    )
}

export default GameList;


/* Using class

    class GameList extends Component {
    state = {
        gameList: []
    }

    componentDidMount() {
        this.getGameList()
    }

    getGameList = () => {
        axios.get("https://wild-games.herokuapp.com/api/v1")
        .then(res => this.setState(() => ({gameList: res.data})))
    }

    handleClick = (idCard) => {
        const listTemp = this.state.gameList
        const index = listTemp.findIndex(item => item.id === parseInt(idCard))
        const remove = window.confirm("Are you sure you want to remove this game from the list?")
        if (remove) {
            listTemp.splice(index, 1)
            this.setState({ gameList : listTemp})
        }
    }

    render() {
        return (
            <div className="gameCard_wrapper">
                {this.state.gameList.map(game => <Game name={game.name} image={game.background_image} rating={game.rating} key={game.id} id={game.id} handleClick={this.handleClick}/>)}
            </div>
        )
    }
}

export default GameList; */