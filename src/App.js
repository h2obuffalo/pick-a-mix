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
          <div className="whole" >
              <header className="App-header">
                <h1>Team-Frontend</h1>
              </header>
              <Router history={history}>
                <Switch>
                  <Route exact path="/" component={EnterPlayersScreen} />
                  <Route exact path="/teams" component={TeamScreen} />
                </Switch>
              </Router>
          </div>
      </div>
    );
  }
}

export default App;
