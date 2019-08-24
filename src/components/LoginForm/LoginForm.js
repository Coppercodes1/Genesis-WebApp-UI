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
                <div style={inStyles.logoContainer}>
                    <img
                        style={inStyles.logo}
                        src='http://www.coppercodes.com/Genesis/Images/Logo/GenesisBlack.png'
                        alt='logo'
                        height='40px'
                    />
                </div>
                <div style={inStyles.formContainer}>
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
            </div>
        );
    }
}
const inStyles = {
    container: {
        width: '500px',
        backgroundColor: '#fff',
        borderRadius: 5,
        boxShadow: '0px 0px 15px 5px rgba(0,0,0,.1)',
        padding: 20,
    },
    logoContainer: {
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        width: '100%',
    },
    input: {
        margin: '10px 0',
        height: '45px',
    },
    button: {
        marginTop: '30px',
        height: '45px',
    }
}