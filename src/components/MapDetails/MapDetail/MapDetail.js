import React from 'react';
import { Typography, Divider } from 'antd';

const { Text } = Typography;


const MapDetail = (props) => {
    return (
        <div style={inStyles.detail}>
            <div style={inStyles.detailContainer}>
                <div>
                    <Text strong>{props.warehouseAlias == "" ? props.warehouseName : props.warehouseAlias}</Text>
                </div>
                <div>
                    <Text >{props.numberOfSensorFailure}</Text>
                </div>
            </div>
            <Divider
                style={{
                    margin: '10px 0',
                    display: props.index == (props.length - 1) ? 'none' : 'flex'
                }}
            />
        </div>
    );
};

const inStyles = {
    detail: {
        width: '200px'
    },
    detailContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export default MapDetail;