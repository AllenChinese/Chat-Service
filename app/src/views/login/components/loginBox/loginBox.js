import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import './loginBox.css'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.username === 'allen'
      && this.state.password === '123456'
    ) {
      console.log(this.state)
      this.setState({
        isRedirect: true
      })
    }
  }

  userNameHandleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  passwordHandleChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    if (this.state.isRedirect) {
      return (<Redirect to='/chatRoom' />)
    } else {
      return (
        <div className="login-content">
          <div className="login-header">
            <p>美洽聊天室</p>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={(e) => this.userNameHandleChange(e)} />
            </Form.Item>
            <Form.Item>
              <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={(e) => this.passwordHandleChange(e)} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
          </Form>
        </div>
      )
    }
  }
}