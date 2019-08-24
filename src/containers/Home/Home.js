import React, { Component } from 'react';
import styles from './Home.module.css';
import { Layout, Typography, Icon, Button } from 'antd';


import GoogleApiKey from '../../assets/GoogleApiKey/GoogleApiKey'
import Options from '../../components/Options/Options';
import HeaderComponent from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Locations from '../../components/Locations/Locations';
import Metrics from '../../components/Metrics/Metrics';
import Filters from '../../components/Filters/Filters';
const { Sider, Content, Header } = Layout;
const { Text } = Typography;



export default class Home extends Component {
    state = {
        currentOption: 1,
        userDetails: this.props.location.state.detail
    };

    selectOption = (optionId) => {
        this.setState({ currentOption: optionId })
    };
    render() {
        let { UserRef } = this.state.userDetails;
        return (
            <Layout className={styles.layout} >
                <HeaderComponent 
                    userDetails={this.state.userDetails}
                    logout={() => this.props.history.push('Login')} 
                />
                <Layout>
                    <Sider width={250} style={inStyles.sider}>
                        <div style={inStyles.filters}>
                            <Text strong>Filters</Text>
                            <Icon type="filter" theme="filled" />
                        </div>
                        {/* <Filters UserRef={UserRef} /> */}
                        <div style={{ marginTop: '10px' }}>
                            <div >
                                <Text strong>Locations</Text>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <Locations />
                            </div>
                        </div>
                        <div style={inStyles.apply} >
                            <Button type="primary" block>Apply</Button>
                        </div>
                    </Sider>
                    <Content>
                        <Layout>
                            <Header style={inStyles.selectOptions}>
                                <Options
                                    container='home'
                                    currentOption={this.state.currentOption}
                                    selectOption={(optionId) => this.selectOption(optionId)}
                                />
                            </Header>
                            {/* <Content style={{ display: 'flex', justifyCont: 'center', alignItems: 'center' }}>
                                <div>
                                    ahad
                                </div>
                            </Content> */}
                            <div style={{ height: '75vh', width: '50vw', alignSelf: 'center', textAlign: 'center' }}>
                                <Map
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${GoogleApiKey.key}`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `100%` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                    userDetails={this.state.userDetails}
                                />
                            </div>
                        </Layout>
                    </Content>
                    <Sider width={350} style={inStyles.sider}>
                        <Metrics />
                    </Sider>
                </Layout>
            </Layout>
        );
    }
};
const inStyles = {
    // container: {
    //     backgroundColor: '#F0F2F5'
    // },
    filters: {
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sider: {
        borderRadius: 5,
        padding: 20,
        margin: 20,
        backgroundColor: '#fff',
        boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.1)',
        overflowY: 'scroll'
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
    apply: {
        position: 'absolute',
        left: '50%',
        bottom: '5%',
        transform: 'translate(-50%, 0)'
    }
};

// {
//     "data": {
//         "region": "verna", 
//         "coordinates": ["15.3599° N", "73.9419° E"], 
//         "no_of_sensor_errors": "12"
//     }, 
//     "error_id": "null",
//     "request_id": "asjsvchds"
// }