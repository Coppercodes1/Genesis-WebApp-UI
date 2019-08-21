import React, { Component } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';

import MapDetails from '../../components/MapDetails/MapDetails';
import Url from '../../assets/Url/Url';

class Map extends Component {
    state = {
        isLoading: true,
        currentMark: null,
        defaultCenter: null,
        data: null,
        error: null,
        userDetails: this.props.userDetails
    };

    componentDidMount = () => {
        let { userDetails } = this.state;
        console.log('user details', this.state.userDetails)
        return fetch(Url.baseUrl + 'getLocationView', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_ref": userDetails.UserRef
            })
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response.data,
                    isLoading: false,
                    defaultCenter: {
                        lat: Number(response.data[0].coordinates.latitude),
                        lng: Number(response.data[0].coordinates.longitude)
                    }
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: error })
            })
    };

    renderMap = () => {
        let { error, isLoading, currentMark } = this.state
        if (error) {
            return (
                <div>
                    <h1>Error</h1>
                </div>
            )
        };
        if (isLoading) {
            return (
                <div>

                </div>
            );
        } else {
            let { data } = this.state;
            return (
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={this.state.defaultCenter}
                >
                    {
                        data.map((location, index) => {
                            return (
                                <Marker
                                    key={index}
                                    position={{
                                        lat: Number(location.coordinates.latitude),
                                        lng: Number(location.coordinates.longitude)
                                    }}
                                    icon={{
                                        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                                    }}
                                    onClick={() => {
                                        this.setState({
                                            currentMark: location,
                                            defaultCenter: {
                                                lat: Number(location.coordinates.latitude),
                                                lng: Number(location.coordinates.longitude)
                                            }
                                        })
                                    }}
                                />
                            );
                        })
                    }

                    {
                        currentMark && (
                            <InfoWindow
                                position={{
                                    lat: Number(currentMark.coordinates.latitude),
                                    lng: Number(currentMark.coordinates.longitude)
                                }}
                                onCloseClick={() => {
                                    this.setState({ currentMark: null })
                                }}
                            >
                                <MapDetails detail={currentMark} />
                            </InfoWindow>
                        )
                    }
                </GoogleMap>
            );
        }
    }
    render() {

        return (
            <div>
                {this.renderMap()}
            </div>
        );
    }
}



const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap;