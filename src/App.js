import React, { Component } from 'react';
import TeamScreen from './screens/TeamScreen';
import EnterPlayersScreen from './screens/EnterPlayersScreen';
import './App.css';
import history from './history';
import { Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pic n Mix</h1>
        </header>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={EnterPlayersScreen} />
            <Route exact path="/teams" component={TeamScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
