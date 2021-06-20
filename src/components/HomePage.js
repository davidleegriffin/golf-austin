import React from 'react';
import Logout from './Logout';
import Login from './Login';

function HomePage(props) {
    console.log('homepage props', props.props);
    let name = (props.props.name) ? props.props.name : "";
    let email = (props.props.email) ? props.props.email : "";
    let imgSrc = (props.props.imageUrl) ? props.props.imageUrl : "";

    return (
        <div>
            <Logout />
            <div>
                {name}
            </div>
            <div>
                {email}
            </div>
            <div>
                <img src={`${imgSrc}`} alt="profile-pic" />
            </div>
        </div>
    )
}

export default HomePage;