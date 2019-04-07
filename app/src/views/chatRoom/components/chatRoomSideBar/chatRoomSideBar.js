import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Tooltip } from 'antd';
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

  settingHandleClick() {
    // switch theme color
  }

  closeHandleClick() {
    // close the chatRoom
    // back to login
    this.props.history.push('/login');
  }

  render() {
    const text = 'React、antd、Express、Socket.io';
    return (
      <div className="setting-area">
        <i
          onClick={() => this.settingHandleClick()}
          className="iconfont iconshezhi icon__setting"
        />
        <i
          onClick={() => this.closeHandleClick()}
          className="iconfont iconclose icon__close"
        />
        <Tooltip placement="topLeft" trigger="click" title={text}>
          <i className="iconfont iconguanyu icon__about" />
        </Tooltip>
      </div>
    );
  }
}

class ChatRoomSideBar extends Component {
  render() {
    return (
      <div className="chatRoom-sideBar">
        <UserOnlineBox />
        <SettingArea history={this.props.history} />
      </div>
    );
  }
}

export default withRouter(ChatRoomSideBar);
