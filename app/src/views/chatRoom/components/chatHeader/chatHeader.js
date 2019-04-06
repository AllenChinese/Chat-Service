import React, { Component } from 'react';
import './chatHeader.less';

class ChatHeader extends Component {
  render() {
    return (
      <div className="header-content">
        <span
          className="single-circle"
          style={{ backgroundColor: '#00a6ac' }}
        />
        <span
          className="single-circle"
          style={{ backgroundColor: '#145b7d' }}
        />
        <span
          className="single-circle"
          style={{ backgroundColor: '#009ad6' }}
        />
      </div>
    );
  }
}

export default ChatHeader;
