import React, { Component } from 'react';
import { Input, Tooltip, Icon, Typography, Button } from 'antd';

const { Title } = Typography;

export default class LoginForm extends Component {
    state = {
        userName: '',
        password: ''
    }
    render() {
        return (
            <div style={inStyles.container}>
                <Title level={3}>Login</Title>
                <Input
                    style={inStyles.input}
                    placeholder="Enter your username"
                    value={this.props.userName}
                    onChange={this.props.setUsername}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Type your username">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <Input.Password
                    style={inStyles.input}
                    placeholder="input password"
                    value={this.props.password}
                    onChange={this.props.setPassword} />
                <Button disabled={!this.props.canSubmit} onClick={this.props.login} style={inStyles.button} type="primary" block>
                    Login
                </Button>
            </div>
        );
    }
}
const inStyles = {
    container: {
        height: '50vh',
        width: '400px',
        backgroundColor: '#fff',
        borderRadius: 5,
        boxShadow: '0px 0px 15px 5px rgba(0,0,0,.1)',
        padding: 20
    },
    input: {
        margin: '10px 0',
        height: '50px'
    },
    button: {
        marginTop: '30px',
        height: '50px'
    }
}