import React, { Component } from 'react';
import './chatRoomSideBar.less';

function UserOnlineBox() {
  return (
    <div className="user-online-box">
      <div className="user-preview">
        <img src="https://avatars2.githubusercontent.com/u/414752?s=88&v=4" />
      </div>
      <div className="online-light" />
    </div>
  );
}

class SettingArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="setting-area">
        <i className="iconfont iconshezhi icon__setting" />
        <i className="iconfont iconclose icon__close" />
        <i className="iconfont iconguanyu icon__about" />
      </div>
    );
  }
}

class ChatRoomSideBar extends Component {
  render() {
    return (
      <div className="chatRoom-sideBar">
        <UserOnlineBox />
        <SettingArea />
      </div>
    );
  }
}

export default ChatRoomSideBar;
