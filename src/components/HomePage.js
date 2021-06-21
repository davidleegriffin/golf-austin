import React from 'react';
import Logout from './Logout';
import './HomePage.css';

function HomePage(props) {
    console.log('homepage props', props.props);
    let name = (props.props.name) ? props.props.name : "";
    let email = (props.props.email) ? props.props.email : "";
    let imgSrc = (props.props.imageUrl) ? props.props.imageUrl : "";
    let googleId = (props.props.googleId) ? props.props.googleId : "";

    return (
        <div className="home__container--main">
            <div className="home__container--profile">
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
            <Logout />
        </div>
    )
}

export default HomePage;