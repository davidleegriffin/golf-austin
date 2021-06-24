import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Detail.css'

function Detail(props) {

    const selectedCourse = props?.location.props.name.selected;
    const dressCode = (props?.location.props.name.selected.DressCode__H) ? props?.location.props.name.selected.DressCode__H : "NONE";
    console.log(dressCode);

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
        </div>
    )
}

export default Detail;

