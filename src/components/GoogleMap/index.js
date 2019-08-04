import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import mark from '../../assets/location-icon.png';

const AnyReactComponent = ({ text }) => <div><img src={mark} /><h1>{ text }</h1></div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  render() {
    return (
      <div className='google-map' style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'My marker' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
export default Map;