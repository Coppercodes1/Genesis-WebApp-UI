import React from 'react';

import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;


const Metric = (props) => {
    return (
        <div style={{
            textAlign: 'center',
            margin: '20px 0',
            backgroundColor: props.secondaryColor,
            borderRadius: '3px',
            overflow: 'hidden',
            display: 'flex',
            height: '130px'
        }}>
            <div style={{
                height: '100%',
                width: '40%',
                backgroundColor: props.primaryColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img
                    src={props.imageUrl}
                    alt='metrics'
                    width='60px'
                    height='60px' />
            </div>
            <div style={{ height: '100%', width: '60%' }}>
                <div style={{
                    width: '100%',
                    height: '73%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Title level={2} style={{ padding: 0, margin: 0, color: '#fff' }}>{props.number}</Title>
                </div>
                <Divider style={{ color: '#fff', margin: 0 }} />
                <div style={{ height: '24%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }} strong>{props.type}</Text>
                </div>
            </div>
        </div>
    )
};

export default Metric;


