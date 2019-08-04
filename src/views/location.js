import React from 'react';
import Map from '../components/GoogleMap';

class Location extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <div style={{height:'500px'}}>
        <Map />             
        </div>
      );
    }
  }
  
  export default Location;