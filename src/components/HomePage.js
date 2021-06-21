import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
        height: '50vmax',
      };

      const center = {
        lat: 30.2672,
        lng: -97.7431
      };

    return (
        <div className="home__container--main">
            <div className="home__container--OAuth">
                <div></div>
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
                    <Logout />
                </div>
            </div>
            <div className="home__container--map">
                <LoadScript
                    googleMapsApiKey={
                        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
                    }
                >
                {/* <LoadScript
                    googleMapsApiKey="AIzaSyBo4e5Xf0Mbt3QWjz6YsLX01tCCVcDjEq0"
                > */}
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <Marker
                            position={{
                            lat: 30.412344994349912,
                            lng: -97.89943256168085,
                            }}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default HomePage;
