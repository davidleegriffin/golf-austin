import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Detail.css'

function Detail(props) {

    const selectedCourse = props?.location.props.name.selected;

    console.log('props', selectedCourse);
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
            </div>
        </div>
    )
}

export default Detail;

