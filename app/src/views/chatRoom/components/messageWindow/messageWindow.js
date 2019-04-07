import React, { Component } from 'react';
import { Tag } from 'antd';
import './messageWindow.less';

function singleSidebar() {
  return (
    <div className="single-sidebar">
      <div className="static-msg">
        <h2>项目信息</h2>
        <p>项目名：Chat Service</p>
        <p>
          Github：
          <a href="https://github.com/AllenChinese/Chat-Service">
            Chat Service
          </a>
        </p>
      </div>
      <div className="static-msg">
        <h2>个人信息</h2>
        <p>微信：zjw13402202685</p>
        <p>公司：丁香园</p>
        <p>
          内推：<a href="mailto:zjiawei@dxy.cn">zjiawei@dxy.cn</a>
        </p>
      </div>
      <div className="static-msg">
        <h2>标签</h2>
        <Tag color="#f50">Express</Tag>
        <Tag color="#2db7f5">React</Tag>
        <Tag color="#108ee9">Antd</Tag>
        <Tag color="#87d068">Socket</Tag>
      </div>
    </div>
  );
}

class MessageWindow extends Component {
  render() {
    return (
      <div className="message-window">
        <div className="single-window">this is MessageWindow</div>
        {singleSidebar()}
      </div>
    );
  }
}

export default MessageWindow;
