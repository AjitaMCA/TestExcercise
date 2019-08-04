import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Stamp from '../assets/bg-detail@2x.png';
import bigimg from '../assets/go-btn.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
  getUserByUsername,
} from "../Actions/instagramActions";

class Menu extends React.Component {
	static propTypes = {
    userDetail: PropTypes.any
  };
  /* eslint-enable */

  static defaultProps = {
    userDetail: {}
  };
	constructor(props) {
	    super(props);
	    this.state = {
	      userDetail: {}
	  	}
	  	this.getUser = this.getUser.bind(this);
  	}
  	getUser(userName) {
  		 this.props.dispatch.getUserByUsername(userName);
  	}
	componentWillMount() {
		this.getUser('love_food').then((user) => {
		    console.log('User',user)
		})
	}
    render() {
        return (
        	 <div style={{height:'500px', width:"100%"}}>
        
            <div style={{width:'50%', float:"left", paddingLeft:"100px", paddingTop:"100px"}}> <h1> Collaborate <br></br> With Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. <br></br>
Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore</p></div>
            <div style={{width:'50%', float:"right", paddingTop:"50px"}}>
            <div><img src={Stamp}/> </div>
            
            <br></br>
            <div>

            <form>
                <lable>Name</lable>
            </form>
            </div>
           
            </div>
        </div>
        );
    }
}


function mapStateToProps(state) {
  return {
    userDetail: state.insta.userDetail
  };
}

export default connect(mapStateToProps)(Menu);





 
// getUserIdFromUsername('love_food').then((id) => {
//     console.log('id',id)
// })
 
// getMediaByCode('BUu14BdBkO5').then(media => {
//     console.log(media)
// })
 
// getMediaOwnerByCode('BUu14BdBkO5').then(media => {
//     console.log(media)
// })
 
// getMediaByLocation('20388055').then(({ location }) => {
//     console.log('loc',location.id)
//     console.log(location.name)
//     console.log(location.slug)
// })
 
// getMediaByTag('abcd').then((media) => {
//     console.log(media)
// })
 
// generalSearch('insta').then((results) => {
//     console.log(results)
// })
 
// getUserProfilePicture('instagram').then((url) => {
//     console.log(url)
// })
 
// getMediaLikesByCode('BUu14BdBkO5').then((media) => {
//     console.log('likes',media)
// })
 
// getMediaCommentsByCode('BUu14BdBkO5').then((media) => {
//     console.log(media)
// })
 
// getTaggedUsersByCode('BUu14BdBkO5').then((media) => {
//     console.log(media)
// })