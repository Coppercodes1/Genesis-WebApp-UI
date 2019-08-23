import React, { Component } from 'react';

import { Typography } from 'antd';

import Url from '../../assets/Url/Url';

const { Text } = Typography;


export default class Filters extends Component {
    state = {
        filters: null,
        displayFilters: [],
        isLoading: true
    }
    componentDidMount = () => {
        return fetch(Url.baseUrl + 'getFilter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'user_ref': this.props.UserRef
            })
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    filters: response.data,
                    isLoading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        let displayFilters = (
            <div style={{ marginTop: '10px' }}>
                <div >
                    <Text strong>Locations</Text>
                </div>
                <div style={{ marginTop: '10px' }}>

                </div>
            </div>
        );
        if (this.state.isLoading) {
            return null
        } else {
            let { filters } = this.state;
            for (let filter in filters) {
                console.log(filters[filter].filterName)
            }
            return (
                <div>
                    {displayFilters}
                </div>
            );
        }

    }
};



