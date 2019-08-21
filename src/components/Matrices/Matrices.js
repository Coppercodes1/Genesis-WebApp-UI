import React, { Component } from 'react';
import Matrix from './Matrix/Matrix';

export default class Matrices extends Component {
    render() {
        return (
            <div>
                <Matrix
                    imageUrl='https://image.flaticon.com/icons/svg/993/993762.svg'
                    type='All'
                    number={3}
                />
                <Matrix
                    imageUrl='https://image.flaticon.com/icons/svg/869/869833.svg'
                    type='Electricity'
                    number={3}
                />
                <Matrix
                    imageUrl='https://image.flaticon.com/icons/svg/1909/1909629.svg'
                    type='Attendance'
                    number={2}
                />
            </div>
        );
    }
};
