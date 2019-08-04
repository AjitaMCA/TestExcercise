import React from 'react';
import bigimg from '../assets/bg-pic.png';
import Stamp from '../assets/stamp.png';


class Logo extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <div style={{height:'500px',backgroundImage: `url(${bigimg})`,  overflow: 'hidden', backgroundposition: 'center',backgroundrepeat: 'no-repeat',backgroundsize: 'cover'}}>
            <div style={{alignItems:'center'}}>
              <img src= {Stamp} style={{'margin-left': '250px', 'margin-top': '120px'}}/>
            </div>
           
        </div>
      );
    }
  }
  
  export default Logo;