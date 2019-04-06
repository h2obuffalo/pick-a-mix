import React, { Component } from 'react';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Pic n Mix</h1>
        </header>
        <div className="input-left">
          <AddPlayer />
        </div>
        <div className="list-right">
          <PlayerList />
        </div>
      </div>
    );
  }
}

export default App;
