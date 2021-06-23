import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useQuery } from "@apollo/react-hooks"
import { GET_GOLF } from "../queries/getGolf.js"
import Logout from './Logout';
import './HomePage.css';

function HomePage(props) {
    const [ selected, setSelected ] = useState({});
    console.log('homepage props', props.props);
    let name = (props.props.name) ? props.props.name : "";
    let email = (props.props.email) ? props.props.email : "";
    let imgSrc = (props.props.imageUrl) ? props.props.imageUrl : "";
    let googleId = (props.props.googleId) ? props.props.googleId : "";

    console.log(googleId);

    const {
        data,
        loading,
        error
    } = useQuery(GET_GOLF)
    
    const golf = data?.golf;
    console.log('golf', golf);
    
    if (loading) return <p>Almost there...</p>
    if (error) return <p>{error.message}</p>

    const onSelect = item => {
        setSelected(item);
    }

    const containerStyle = {
        width: '90vmin',
        height: '60vmax',
    };

    const center = {
        lat: 30.2672,
        lng: -97.8231
    };

    const locations = [
        {
            name: "UT Golf Club",
            location: {
                lat: 30.35645895033929,
                lng: -97.89316004412667,
            },
        },
        {
            name: "Austin Country Club",
            location: {
                lat: 30.342506721735976,
                lng: -97.79759910777346,
            },
        },
        {
            name: "Spanish Oaks",
            location: {
                lat: 30.301056531418297,
                lng: -97.94533494871781,
            },
        },
        {
            name: "Barton Creek Country Club",
            location: {
                lat: 30.270621406552227,
                lng: -97.87561323973802,
            },
        },
        {
            name: "Lost Creek Country Club",
            location: {
                lat: 30.275623121157704,
                lng: -97.84929439900793,
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
                lat: 30.299353681539625,
                lng: -97.7243986431805,
            },
        },
        {
            name: "Morris Williams Golf Course",
            location: {
                lat: 30.289426474278685,
                lng: -97.6940893185249,
            },
        },
        {
            name: "Grey Rock Golf and Tennis",
            location: {
                lat: 30.183825034720783,
                lng: -97.91382625799028,
            },
        },
        {
            name: "Lions Municipal Golf Course",
            location: {
                lat: 30.290315108240506,
                lng: -97.77703278644572,
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
                        zoom={11.5}
                    >
                        {
                            locations.map(item => {
                                return (
                                    <Marker key={item.name}
                                        icon={
                                            'https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-golf-game-icon.png'
                                        }
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
