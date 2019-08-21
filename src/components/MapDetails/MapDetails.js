import React, { Component } from 'react';
import MapDetail from '../../components/MapDetails/MapDetail/MapDetail';
import { Typography } from 'antd';

const { Text } = Typography;

export default class MapDetails extends Component {
    render() {
        let { detail } = this.props;
        if (detail.warehouses.length > 0) {
            return (
                <div>
                    <div style={{ marginBottom: '10px' }}>
                        <Text>{detail.region}</Text>
                    </div>
                    {
                        detail.warehouses.map((warehouse, index) => {
                            return (
                                <MapDetail
                                    key={index}
                                    index={index}
                                    length={detail.warehouses.length}
                                    warehouseName={warehouse.warehouse_name}
                                    warehouseAlias={warehouse.warehouse_alias}
                                    numberOfSensorFailure={warehouse.no_of_sensor_failures}
                                />
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <div>
                    <Text>No warehouses</Text>
                </div>
            );
        }

    }
}