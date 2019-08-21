import React, { Component } from 'react';
import styles from './Login.module.css';
import { Layout, message } from 'antd';

import HeaderComponent from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import Url from '../../assets/Url/Url';



export default class Login extends Component {
    state = {
        userName: '',
        password: '',
        canSubmit: false
    };
    validate = () => {
        let { userName, password } = this.state;
        if (userName.length > 0 && password.length > 0) {
            this.setState({ canSubmit: true })
        } else {
            this.setState({ canSubmit: false })
        }
    }
    login = () => {
        message.loading('please wait', 1)
        return fetch(Url.baseUrl + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Username": this.state.userName,
                "Password": this.state.password
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.UserRef != null) {
                    const userDetails = {
                        UserRef: response.UserRef,
                        AuthToken: response.AuthToken
                    }
                    message.success('Login successful', 2.5, () => this.navigate(userDetails))
                } else {
                    message.error('Please enter valid email and password', 2.5)
                }
            })
            .catch(error => {
                message.error('Something went wrong, please try again', 2.5)
            })
    };
    navigate = (userDetails) => {
        console.log('before ', userDetails)
        this.props.history.replace({
            pathname: '/Home',
            state: { detail: userDetails }
        })
    }
    render() {
        return (
            <Layout className={styles.layout}>
                {/* <HeaderComponent /> */}
                <Layout style={inStyles.container}>
                    <LoginForm
                        userName={this.state.userName}
                        password={this.state.password}
                        canSubmit={this.state.canSubmit}
                        setUsername={event => this.setState({ userName: event.target.value }, this.validate)}
                        setPassword={event => this.setState({ password: event.target.value }, this.validate)}
                        login={this.login}
                    />
                </Layout>
            </Layout>
        );
    }
}
const inStyles = {
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}