import React from 'react';

import { Typography, Divider } from 'antd';

const { Title } = Typography;


const Matrix = (props) => {
    return (
        <div style={inStyles.container}>
            <div style={inStyles.matrixContainer}>
                <div>
                    <img
                        src={props.imageUrl}
                        alt='electricity'
                        width="100"
                        height="100" />
                </div>
                <div>
                    <Title level={2}>{props.number}</Title>
                </div>
            </div>
            <Divider>{props.type}</Divider>
        </div>
    )
}

const inStyles = {
    container: {
        textAlign: 'center',
        margin: '20px 0'
    },
    matrixContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
};

export default Matrix;



