import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import ChatDisplay from './ChatDisplay';
import ChatInputs from './ChatInputs';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    console.log(io);
    socket.on('sendMessage', message => {
      this.setState({
        ...this.state,
        messages: [...this.state.messages, message]
      });
    });
  }

  sendMessage(e) {
    e.preventDefault();
    const newMessage = {
      author: e.target.handle.value,
      content: e.target.message.value
    };
    socket.emit('sendMessage', newMessage);
  }

  render() {
    return (
      <div className="chat">
        <ChatDisplay messages={this.state.messages}/>
        <ChatInputs handleSubmit={this.sendMessage} />
      </div>
    );
  }
}

export default Chat;