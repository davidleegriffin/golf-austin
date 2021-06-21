import React from 'react';
import Login from './Login';
import './SplashPage.css';

function SplashPage() {
    return (
        <div className="splash__container--main">
            <h1>GOLF-AUSTIN</h1>
            <Login />
        </div>
    );
}

export default SplashPage;