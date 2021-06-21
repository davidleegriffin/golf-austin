import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Logout from './Logout';
import './HomePage.css';

function HomePage(props) {
    console.log('homepage props', props.props);
    let name = (props.props.name) ? props.props.name : "";
    let email = (props.props.email) ? props.props.email : "";
    let imgSrc = (props.props.imageUrl) ? props.props.imageUrl : "";
    let googleId = (props.props.googleId) ? props.props.googleId : "";

    const containerStyle = {
        width: '90vmax',
        height: '400px'
      };

      const center = {
        lat: 30.2672,
        lng: -97.7431
      };

    return (
        <div className="home__container--main">
            <div className="home__container--OAuth">
                <div className="home__container--profile">
                    <div className="home__container--name">
                        {name}
                    </div>
                    <div className="home__container--email">
                        {email}
                    </div>
                    <div className="home__container--profile-image">
                        <img className="home__image--profile" src={`${imgSrc}`} alt="profile-pic" />
                    </div>
                </div>
                <Logout />
            </div>
            <LoadScript
                googleMapsApiKey="AIzaSyBo4e5Xf0Mbt3QWjz6YsLX01tCCVcDjEq0"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                />
            </LoadScript>
        </div>
    )
}

export default HomePage;
