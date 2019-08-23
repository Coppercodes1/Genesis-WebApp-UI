import React, { Component } from 'react';
import Metric from './Metric/Metric';

export default class Metrics extends Component {
    render() {
        return (
            <div >
                <Metric
                    imageUrl='http://www.coppercodes.com/Genesis/Images/MetricsIcons/metricsOffLimits.png'
                    type='Metrics off limits'
                    number={2}
                    primaryColor='#cc2b2b'
                    secondaryColor='#f23f51'
                />
                <Metric
                    imageUrl='http://www.coppercodes.com/Genesis/Images/MetricsIcons/attendance.png'
                    type='Attendance'
                    number={33}
                    primaryColor='#217933'
                    secondaryColor='#52855c'
                />
                <Metric
                    imageUrl='http://www.coppercodes.com/Genesis/Images/MetricsIcons/power.png'
                    type='Power MTD(Kwh)'
                    number={32456}
                    primaryColor='#787878'
                    secondaryColor='#b5b5b5'
                />
                <Metric
                    imageUrl='http://www.coppercodes.com/Genesis/Images/MetricsIcons/emergencies.png'
                    type='Emergencies'
                    number={2}
                    primaryColor='#e88c02'
                    secondaryColor='#f5ac53'
                />
            </div>
        );
    }
};
