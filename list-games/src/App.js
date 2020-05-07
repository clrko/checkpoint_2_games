import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GameList from './components/GameList'
import Screenshots from './components/Screenshots'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GameList}/>
        <Route path="/game/screenshots/:id" component={Screenshots} />
      </Switch>
    </Router>
  )
}

export default App;
