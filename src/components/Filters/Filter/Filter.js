import React from 'react';

import { Radio } from 'antd';

const Filter = (props) => (
    <div>
        <Radio.Group onChange={props.onChange} value={props.value}>
            {
                props.locations.map((location, index) => (
                    <Radio key={index} style={inStyles.radioStyle} value={index}>
                        {location.name}
                    </Radio>
                ))
            }
        </Radio.Group>
    </div>
);
const inStyles = {
    radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    }
};

export default Filter;