import React, { Component } from 'react';
import './messageItems.less';

class MessageItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messageItems-wrapper">
        <ul className="message-items">
          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12].map(item => {
            return (
              <li className="message-item" key={`hash_` + item}>
                <div className="item-preview">
                  <img src="https://avatars2.githubusercontent.com/u/414752?s=88&v=4" />
                </div>
                <div className="item-message">
                  <div className="topBar">
                    <p>allen 来自杭州</p>
                    <p>35 分钟前</p>
                  </div>
                  <div className="chatting">
                    <p>再不回来我要找你们领导了，你打球像蔡徐坤！</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MessageItems;
