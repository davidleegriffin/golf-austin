import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Logout from './Logout';
import './HomePage.css';

function HomePage(props) {
    const [ selected, setSelected ] = useState({});
    console.log('homepage props', props.props);
    let name = (props.props.name) ? props.props.name : "";
    let email = (props.props.email) ? props.props.email : "";
    let imgSrc = (props.props.imageUrl) ? props.props.imageUrl : "";
    let googleId = (props.props.googleId) ? props.props.googleId : "";

    const onSelect = item => {
        setSelected(item);
    }

    const containerStyle = {
        width: '90vmax',
        height: '50vmax',
    };

    const center = {
        lat: 30.2672,
        lng: -97.7431
    };

    const locations = [
        {
        name: "UT Golf Club",
        location: { 
            lat: 30.412344994349912,
            lng: -97.89943256168085,
        },
        },
        {
        name: "Spanish Oaks",
        location: { 
            lat: 30.345999846740344, 
            lng: -97.94887104494033,
        },
        },
        {
        name: "Riverside Golf Course",
        location: { 
            lat: 30.247224963112888, 
            lng: -97.70303065407083,
        },
        },
        {
        name: "Hancock Golf Course",
        location: { 
            lat: 30.306523602979013, 
            lng: -97.72294337379653,
        },
        },
        {
        name: "Lions Municipal Golf Course",
        location: { 
            lat: 30.300002506709184, 
            lng: -97.77512843238802,
        },
        }
    ];

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
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        {
                            locations.map(item => {
                                return (
                                    <Marker key={item.name} 
                                        position={item.location}
                                        onClick={() => onSelect(item)}
                                    />
                                )
                            })
                        }
                        {
                            selected.location && 
                            (
                                <InfoWindow
                                position={selected.location}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                                >
                                <div className="home__infoWindow--name">{selected.name}</div>
                                </InfoWindow>
                            )
                        }
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default HomePage;
