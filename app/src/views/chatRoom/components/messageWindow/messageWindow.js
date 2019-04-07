import React, { Component } from 'react';
import { Tag, Input } from 'antd';
import './messageWindow.less';

function SingleSidebar(props) {
  const sidebarMsg = props.sidebarMsg;
  return (
    <div className="single-sidebar">
      <div className="static-msg">
        <h2>项目信息</h2>
        <p>项目名：{sidebarMsg.projectMsg.name}</p>
        <p>
          Github：
          <a href={sidebarMsg.projectMsg.githubAddress}>
            {sidebarMsg.projectMsg.name}
          </a>
        </p>
      </div>
      <div className="static-msg">
        <h2>个人信息</h2>
        <p>微信：{sidebarMsg.personalMsg.wechat}</p>
        <p>公司：{sidebarMsg.personalMsg.company}</p>
        <p>
          内推：
          <a href={'mailto:' + sidebarMsg.personalMsg.job}>
            {sidebarMsg.personalMsg.job}
          </a>
        </p>
      </div>
      <div className="static-msg">
        <h2>标签</h2>
        {sidebarMsg.tags.map(item => {
          <Tag color={item.color}>{item.tag}</Tag>;
        })}
      </div>
    </div>
  );
}

class SingleWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { TextArea } = Input;
    return (
      <div className="single-window">
        <div className="single-window-top">
          <i className="iconfont iconshouji" />
          <p>杭州滨江 Allen</p>
        </div>
        <div className="single-window-content" />
        <div className="single-window-footer">
          <div className="function-bar">
            <i className="iconfont iconemoji" />
            <i className="iconfont icontupian" />
            <i className="iconfont iconlishixiaoxi" />
          </div>
          <div className="input-area">
            <TextArea className="textarea" rows={4} />
          </div>
        </div>
      </div>
    );
  }
}

class MessageWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarMsg: {
        projectMsg: {
          name: 'Chat Service',
          githubAddress: 'https://github.com/AllenChinese/Chat-Service'
        },
        personalMsg: {
          wechat: 'zjw13402202685',
          company: '丁香园',
          job: 'zjiawei@dxy.cn'
        },
        tags: [
          {
            color: '#f50',
            tag: 'Express'
          },
          {
            color: '#2db7f5',
            tag: 'React'
          },
          {
            color: '#108ee9',
            tag: 'Antd'
          },
          {
            color: '#87d068',
            tag: 'Socket'
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="message-window">
        <SingleWindow />
        <SingleSidebar sidebarMsg={this.state.sidebarMsg} />
      </div>
    );
  }
}

export default MessageWindow;
