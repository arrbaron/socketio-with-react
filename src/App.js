import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat';
import { broadcastMessage } from './chat';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Chat broadcastMessage={broadcastMessage} />
      </div>
    );
  }
}

export default App;
