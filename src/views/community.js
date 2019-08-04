import React from 'react';
import { getUserByUsername } from '../Services/instaService';
import back from '../assets/detail02@2x.png';
import  './styles.css';
const user = {};
class Community extends React.Component {

    constructor() {
        super();
        this.state = {
            userDetail: {}
        }
    }

    componentDidMount() {
        //calling directly js function from service
        getUserByUsername('love_food').then((user) => {
            console.log("user", user);
            this.setState({ userDetail: user });
        })
    }

    render() {
        return (
            <div  className="rows" style={{'box-sizing': 'border-box'}}>
            <div className="rows">
                    <div className="columns">
                     </div>
                    <div className="columns">
                        <h1>MEET OUR COMMUNITY</h1>
                        <span>Know More</span>
                        <div>LOREM IPSUM DOLOR SIT
                                AMET ERNUT TEMPARTERO
                                SERTU PER NABORE EN
                                TORNA ENTALTO
                                
                        </div>
                    </div>
                    <div className="columns" style={{backgroundImage: `url(${back})`, height:'300px'}}>
                    <img src={this.state.userDetail.profile_pic_url_hd}/>
                    </div>
                    <div className="columns">
                   <h4> @{this.state.userDetail.username}</h4>
                    {this.state.userDetail.biography}
                    </div>
            </div>
            </div>
        )
    }
}
export default Community;