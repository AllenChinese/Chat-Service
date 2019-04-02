import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './loginBox.css'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
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
    return (
      <div className="login-content">
        <div className="login-header">
          <p>账号密码登录</p>
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