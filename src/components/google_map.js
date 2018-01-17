'use strict';

import React, { Component } from 'react';

class GoogleMaps extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div ref="map" />;
    }

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom : 12,
            center : {
                lat : parseFloat(this.props.lat),
                lng : parseFloat(this.props.lng)
            }
        });
    }
}

export default GoogleMaps;