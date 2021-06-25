import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Detail.css'

function Detail(props) {
    const [teeTimes, setTeeTimes] = useState();
    const selectedCourse = props?.location.props.name.selected;
    const dressCode = (props?.location.props.name.selected.DressCode__H) ? props?.location.props.name.selected.DressCode__H : "NONE";
    const teeWeb = (props?.location.props.name.selected.TeeTimes__G) ? props.location.props.name.selected.TeeTimes__G : props.location.props.name.selected.Website__M;

    console.log('teeWeb', teeWeb);
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
        </div>
    )
}

export default Detail;

