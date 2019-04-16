import React, { Component } from 'react';
import { getChatList } from '../../../../api/apis/chatRoom';
import './messageItems.less';

class MessageItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatList: []
    };
  }

  async componentDidMount() {
    let res = await getChatList();
    if (res.success) {
      this.setState({
        chatList: res.data.chatList
      });
    }
  }

  render() {
    return (
      <div className="messageItems-wrapper">
        <ul className="message-items">
          {this.state.chatList.map(item => {
            return (
              <li className="message-item" key={`hash_` + item.id}>
                <div className="item-preview">
                  <img src={item.preview} />
                </div>
                <div className="item-message">
                  <div className="topBar">
                    <p>{item.name}</p>
                    <p>{item.time}</p>
                  </div>
                  <div className="chatting">
                    <p>{item.desc}</p>
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
