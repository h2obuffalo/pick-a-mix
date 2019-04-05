import React, { Component } from 'react';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddPlayer />
          <PlayerList />
        </header>
      </div>
    );
  }
}

export default App;
