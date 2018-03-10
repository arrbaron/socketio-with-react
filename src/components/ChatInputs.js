import React from 'react';

const ChatInputs = props => (
  <form className="message-form" onSubmit={e => props.handleSubmit(e)}>
    <input name="handle" placeholder="handle" />
    <input name="message" placeholder="message" />
    <button>Submit</button>
  </form>
);

export default ChatInputs;