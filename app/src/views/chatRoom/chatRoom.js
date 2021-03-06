import React, { Component } from 'react';
import {
  ChatHeader,
  ChatRoomSideBar,
  MessageItems,
  MessageWindow
} from './components';
import { Spin } from 'antd';
import './chatRoom.less';

export default class ChatRoom extends Component {
  render() {
    return (
      <div className="chatroom-wrapper">
        <div className="my-spin" style={{ display: 'none' }}>
          <Spin />
        </div>
        <div className="chatroom-box">
          <div className="chatroom-header">
            {/* ChatHeader */}
            <ChatHeader />
          </div>
          <div className="chatroom-content">
            {/* ChatRoomSideBar */}
            <ChatRoomSideBar />
            {/* MessageItems */}
            <MessageItems />
            {/* MessageWindow */}
            <MessageWindow />
          </div>
        </div>
      </div>
    );
  }
}
