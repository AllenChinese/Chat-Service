import React, { Component } from "react";
import {
  ChatHeader,
  ChatRoomSideBar,
  MessageItems,
  MessageWindow
} from "./components";
import "./chatRoom.less";

export default class ChatRoom extends Component {
  render() {
    return (
      <div className="chatroom-wrapper">
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
