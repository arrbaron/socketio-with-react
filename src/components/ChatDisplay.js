import React from 'react';

const ChatDisplay = props => {
  const messages = props.messages.map((message, index) => 
    <li key={index}>{message.author}: {message.content}</li>
  );

  return (
    <div className="messages">
      {messages}
    </div>
  );
};

export default ChatDisplay;