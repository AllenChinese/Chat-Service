import React, { Component } from 'react';
import './messageWindow.less';

class MessageWindow extends Component {
  render() {
    return (
      <div className="message-window">
        <div className="single-window">this is MessageWindow</div>
        <div className="single-sidebar">this is a single sidebar</div>
      </div>
    );
  }
}

export default MessageWindow;
