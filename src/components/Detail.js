import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Detail.css'

function Detail(props) {
    const history = useHistory();

    if (props.location.props === undefined) {
        history.push("/");
    }

    console.log(props.location.props);

    const selectedCourse = (props?.location.props.name.selected);
    const dressCode = (props?.location.props.name.selected.DressCode__H) ? props?.location.props.name.selected.DressCode__H : "NONE";
    const teeWeb = (props?.location.props.name.selected.TeeTimes__G) ? props.location.props.name.selected.TeeTimes__G : props.location.props.name.selected.Website__M;

    const containerStyle = {
        width: '400px',
        height: '300px',
        borderRadius: '15px',
        position: 'relative',
        top: '-250px',
    };

    const center = {
        lat: props.location.props.name.selected.Latitude__B,
        lng: props.location.props.name.selected.Longitude__C
    };

    return (
        <div className="detail__container--main">
            <div className="detail__container--navbar">
                <h2 className="detail__h2--header">DETAILS</h2>
                <div className="detail__container--navLink">
                    <NavLink
                        className="detail__infoWindow--home"
                        to={{
                            pathname: "/",
                    }}>
                        <button className="detail__button--home">Home</button>
                    </NavLink>
                </div>
            </div>
            <div className="detail__container--content">
                <div className="detail__container--name">
                    <h1>{ selectedCourse.Name__A }</h1>
                </div>
                <div>
                    <img className="detail__image" src={`${selectedCourse.ImageUrl__D}`} alt="image" width="600px" height="400px" />
                </div>
                <div className="detail__container--description">
                        { selectedCourse.Description__E }
                </div>
                <div className="detail__container--price">
                    {selectedCourse.Price__F}
                </div>
                <div className="detail__container--dress">
                    {dressCode}
                </div>
            </div>
            <div className="detail__container--buttons">
                <div>
                    <a href={teeWeb} target="_blank" referrer="none">
                        <button className="detail__buttons--extra">Tee Times</button>
                    </a>
                </div>
                <div>
                    <button className="detail__buttons--extra">Call {selectedCourse.Contact__I}</button>
                </div>
                <div>
                    <button className="detail__buttons--extra">Directions</button>
                </div>
            </div>
            <LoadScript
                    googleMapsApiKey={
                        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
                    }
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                    >
                        <Marker 
                            icon={
                                'https://icons.iconarchive.com/icons/everaldo/crystal-clear/48/App-golf-game-icon.png'
                            }
                            position={{lat: props.location.props.name.selected.Latitude__B, lng: props.location.props.name.selected.Longitude__C}}
                        />
                    </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Detail;
