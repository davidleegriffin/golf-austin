import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useQuery } from "@apollo/react-hooks"
import { GET_GOLF } from "../queries/getGolf.js"
import Logout from './Logout';
import './HomePage.css';

function HomePage(props) {
    const [ selected, setSelected ] = useState({});
    const [courses, setCourses] = useState();
    // console.log('homepage props', props.props);
    let name = (props.props.name) ? props.props.name : "";
    let email = (props.props.email) ? props.props.email : "";
    let imgSrc = (props.props.imageUrl) ? props.props.imageUrl : "";
    // let googleId = (props.props.googleId) ? props.props.googleId : "";

    // console.log('googleId', googleId);

    const {
        data,
        loading,
        error
    } = useQuery(GET_GOLF)

    const golf = data?.golf;
    // console.log('golf', golf);

    if (loading) return <p>Almost there...</p>
    if (error) return <p>{error.message}</p>

    const onSelect = item => {
        // console.log('item', item);
        setSelected(item);
    }

    const containerStyle = {
        width: '90vmin',
        height: '60vmax',
        borderRadius: '15px',
    };

    const center = {
        lat: 30.2672,
        lng: -97.8231
    };


    let locations = [];
    golf.map(ele => {
        // console.log('ele', ele);
        locations.push(ele);
    });




    let publicCourses = [];
    golf.map(course => {
        if (course.Type__K === "public") {
            publicCourses.push(course);
        }
    });

    let privateCourses = [];
    golf.map(green => {
        if (green.Type__K === "private") {
            privateCourses.push(green);
        }
    });

    let nineCourses = [];
    golf.map(hole => {
        if (hole.Holes__L === 9) {
            nineCourses.push(hole);
        }
    });

    function allCourses() {
        setCourses(locations);
    };

    function getPublicCourses() {
        setCourses(publicCourses);
    };

    function getPrivateCourses() {
        setCourses(privateCourses);
    };

    function nines() {
        setCourses(nineCourses);
    };

    if (courses === undefined) {
        setCourses(locations);
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
            <div className="home__container--buttons">
                <button className="home__button--public" onClick={getPublicCourses}>Public</button>
                <button className="home__button--public" onClick={getPrivateCourses}>Private</button>
                <button className="home__button--public" onClick={nines}>9-Hole</button>
                <button className="home__button--public" onClick={allCourses}>All</button>
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
                        zoom={11}
                    >
                        {
                            courses?.map(item => {
                                return (
                                    <Marker key={item.Name__A}
                                        icon={
                                            'https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-golf-game-icon.png'
                                        }
                                        position={{lat: item.Latitude__B, lng: item.Longitude__C}}
                                        onClick={() => onSelect(item)}
                                    />
                                )
                            })
                        }
                        {
                            selected.Name__A &&
                            (
                                <InfoWindow
                                position={{lat: selected.Latitude__B, lng: selected.Longitude__C}}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                                >
                                <div className="home__infoWindow--name">
                                    <div>
                                        {selected.Name__A}
                                    </div>
                                    <div>
                                        <img src={`${selected.ImageUrl__D}`} alt="golf course image" width="150px" height="150px" />
                                    </div>
                                    <div>
                                        <NavLink
                                            className="home__infoWindow--detail"
                                            to={{
                                                pathname: "/detail",
                                        }}>
                                            <button>Details</button>
                                        </NavLink>
                                    </div>
                                </div>

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
