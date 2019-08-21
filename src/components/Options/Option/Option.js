import React from 'react';
import styles from './Option.module.css';
import Colors from '../../../assets/colors/Colors';

import { Typography } from 'antd';
const { Title } = Typography;



const option = (props) => {
    let divStyle = null, textStyle = null;
    if (props.optionId == props.currentOption) {
        divStyle = {
            borderBottom: '3px solid ' + Colors.primary
        };
        textStyle = {
            color: Colors.primary
        };
    } else {
        textStyle = {
            color: Colors.grey
        }
    }
    return (
        <div
            onClick={props.selectOption}
            className={styles.option}
            style={divStyle}
        >
            <Title style={textStyle} level={4}>{props.name}</Title>
        </div>
    );


};

export default option;