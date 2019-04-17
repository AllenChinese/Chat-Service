import React, { Component } from 'react'
import { Tag, Input, Button } from 'antd'
import currentTime from '../../../../utils/currentTime'
import { fetchRoomMessage } from '../../../../api/apis/chatRoom'
import './messageWindow.less'

function SingleSidebar(props) {
  const sidebarMsg = props.sidebarMsg
  return (
    <div className="single-sidebar">
      <div className="static-msg">
        <h2>
          <span>项目信息</span>
        </h2>
        <p>
          <span>项目名：</span>
          {sidebarMsg.projectMsg.name}
        </p>
        <p>
          <span>Github：</span>
          <a href={sidebarMsg.projectMsg.githubAddress}>
            {sidebarMsg.projectMsg.name}
          </a>
        </p>
      </div>
      <div className="static-msg">
        <h2>个人信息</h2>
        <p>
          <span>微信：</span>
          {sidebarMsg.personalMsg.wechat}
        </p>
        <p>
          <span>公司：</span>
          {sidebarMsg.personalMsg.company}
        </p>
        <p>
          <span>内推：</span>
          <a href={'mailto:' + sidebarMsg.personalMsg.job}>
            {sidebarMsg.personalMsg.job}
          </a>
        </p>
      </div>
      <div className="static-msg">
        <h2>标签</h2>
        {sidebarMsg.tags.map(item => {
          ;<Tag color={item.color}>{item.tag}</Tag>
        })}
      </div>
    </div>
  )
}

function SingleChatItem(props) {
  const chatItem = props.chatItem
  return (
    <div className={chatItem.sign ? 'single-item owner' : 'single-item others'}>
      <div className="single-item-content">
        <div className="item-top">
          <p className="item-username">{chatItem.name}</p>
          <p className="item-time">{chatItem.time}</p>
        </div>
        <div className="item-content">
          <p className="txt">{chatItem.msg}</p>
        </div>
      </div>
    </div>
  )
}

class SingleWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      singleWindowItem: {
        title: 'Node Party',
        chatLists: []
      }
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  async componentDidMount() {
    /** 获取单个窗口聊天数据 */
    let res = await fetchRoomMessage()
    if (res.success) {
      this.setState({
        singleWindowItem: res.data
      })
    }
  }

  textareaHandleChange(event) {
    this.setState({
      msg: event.target.value
    })
  }

  onHandleSubmit() {
    this.state.singleWindowItem.chatLists.push({
      id: this.state.singleWindowItem.chatLists.length + 1,
      name: 'allen周嘉炜',
      sign: 1,
      time: currentTime(),
      msg: this.state.msg
    })

    this.setState({
      singleWindowItem: this.state.singleWindowItem,
      msg: ''
    })
  }

  render() {
    const { TextArea } = Input
    return (
      <div className="single-window">
        <div className="single-window-top">
          <i className="iconfont iconshouji" />
          <p>{this.state.singleWindowItem.title}</p>
        </div>
        <div className="single-window-content">
          {this.state.singleWindowItem.chatLists.map(item => (
            <SingleChatItem chatItem={item} key={'hash_' + item.id} />
          ))}
        </div>
        <div className="single-window-footer">
          <div className="function-bar">
            <i className="iconfont iconemoji" />
            <i className="iconfont icontupian" />
            <i className="iconfont iconlishixiaoxi" />
          </div>
          <div className="input-area">
            <TextArea
              className="textarea"
              value={this.state.msg}
              onChange={e => this.textareaHandleChange(e)}
              rows={4}
            />
            <div className="submit-area">
              <Button type="primary" size="small" onClick={this.onHandleSubmit}>
                发送
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class MessageWindow extends Component {
  constructor(props) {
    super(props)
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
    }
  }
  render() {
    return (
      <div className="message-window">
        <SingleWindow />
        <SingleSidebar sidebarMsg={this.state.sidebarMsg} />
      </div>
    )
  }
}

export default MessageWindow
