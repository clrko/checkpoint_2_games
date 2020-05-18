import React, { useState, useEffect }from "react";
import axios from "axios";

import Game from "./Game";

import "./GameList.css"

const GameList = () => {
    const [gameList, setGameList] = useState([])
    const [showBestGames, setShowBestGames] = useState(false)

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

    const handleShowBestGamesClick = () => {
        setShowBestGames(!showBestGames)
    }

    return (
        <div className="gamelist_container">
            <h1>What to play</h1>
            <button className="best_game_btn" onClick={handleShowBestGamesClick}>{showBestGames? "All Games" : "Best Games"}</button>
            <div className="gamecard_wrapper">
                {!showBestGames ? 
                gameList.map((game) => <Game name={game.name} image={game.background_image} rating={game.rating} key={game.id} id={game.id} handleClick={handleClick} screenshots={game.short_screenshots} />)
                :
                gameList.filter((game) => game.rating >= 4.5).map((game) => <Game name={game.name} image={game.background_image} rating={game.rating} key={game.id} id={game.id} handleClick={handleClick} screenshots={game.short_screenshots}/>)
                }
            </div>
        </div>
        
    )
}

export default GameList;