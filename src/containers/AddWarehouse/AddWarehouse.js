import React, { Component } from 'react';
import { Layout, Typography, Icon, Button } from 'antd';
import styles from './AddWarehouse.module.css';
import WarehouseTable from '../../components/WarehouseTable/WarehouseTable';

import HeaderComponent from '../../components/Header/Header';
import Options from '../../components/Options/Options';
import AddWarehouseDetails from '../../components/AddWarehouseDetails/AddWarehouseDetails'

const { Sider, Content, Header } = Layout;


export default class AddLocation extends Component {
    state = {
        currentOption: 1
    };
    selectOption = (optionId) => {
        this.setState({ currentOption: optionId })
    };
    render() {
        return (
            <Layout className={styles.layout} >
                <HeaderComponent />
                <Layout>
                    {/* <Header style={inStyles.selectOptions}>
                        <Options
                            container='warehouse'
                            currentOption={this.state.currentOption}
                            selectOption={(optionId) => this.selectOption(optionId)}
                        />
                    </Header> */}
                    <Content style={inStyles.container}>
                        <AddWarehouseDetails />
                        {/* <WarehouseTable /> */}
                    </Content>
                </Layout>
            </Layout>
        );
    }
};

const inStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    selectOptions: {
        height: 50,
        padding: 0,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.1)'
    },
}