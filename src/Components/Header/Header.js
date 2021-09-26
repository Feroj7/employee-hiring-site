import React from 'react';
import './Header.css';
import image from '../../images/header-img.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="text-area">
                <h1>Build a Software Company</h1>
                <p>Hire employees to make a wonderful software company.Here you can choose employee by <br/> their skills and experience level.</p>
                <h2>Total Budget: 5 Million</h2>
            </div>
            <div className="img-area">
                <img src={image} alt="hiring" />
            </div>
        </div>
    );
};

export default Header;