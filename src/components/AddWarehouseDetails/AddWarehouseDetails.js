import React, { Component } from 'react';
import { Typography, Select, Input, Button } from 'antd';

const { Option } = Select;

const { Text } = Typography;

export default class AddWarehouseDetails extends Component {
    handleChange = () => {
        console.log('success')
    }
    render() {
        return (
            <div style={inStyles.container}>
                <div style={inStyles.fieldContainer}>
                    <div style={inStyles.field}>
                        <Text style={{ fontSize: 20 }}>Location</Text>
                    </div>
                    <div style={inStyles.field}>
                        <Select size={30} defaultValue="Verna" style={{ width: '100%' }} onChange={this.handleChange}>
                            <Option value="Verna">Verna</Option>
                            <Option value="Panjim">Panjim</Option>
                            <Option value="Margao">Margao</Option>
                        </Select>
                    </div>
                </div>

                <div style={inStyles.fieldContainer}>
                    <div style={inStyles.field}>
                        <Text style={{ fontSize: 20 }}>Warehouse Name</Text>
                    </div>
                    <div style={inStyles.field}>
                        <Text style={{ fontSize: 20 }}>VER-WW1</Text>
                    </div>
                </div>

                <div style={inStyles.fieldContainer}>
                    <div style={inStyles.field}>
                        <Text style={{ fontSize: 20 }}>Warehouse Alias</Text>
                    </div>
                    <div style={inStyles.field}>
                        <Input size={30} placeholder="Warehouse name" />
                    </div>
                </div>
                <div style={inStyles.buttonContainer}>
                    <Button style={{ padding: '0 40px' }} size='large' type="primary">Add</Button>
                </div>
            </div>
        );
    }
};

const inStyles = {
    container: {
        backgroundColor: '#fff',
        width: '600px',
        marginTop: '100px',
        padding: '40px',
        borderRadius: '5px',
        boxShadow: '0px 0px 15px 5px rgba(0,0,0,.1)',
    },
    fieldContainer: {
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    field: {
        width: '3000px',
        height: '5px',
        borderWidth: '1px solid black'
    },
    buttonContainer: {
        marginTop: '40px'
    }
}