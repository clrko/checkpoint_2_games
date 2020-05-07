import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GameList from './components/GameList'
import GameImages from './components/GameImages'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GameList}/>
        <Route path="/game/:id" component={GameImages} />
      </Switch>
    </Router>
  )
}

export default App;
