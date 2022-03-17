import React from 'react';
import './Gift.css'
import logo from '../../img/giftCard.jpeg'

const Gift = () => {
    return (
        <div className="constainer-gift">
            <h1>Gift Card</h1>
            <p>La mejor forma de demostrar amor es con una planta</p>
            <img src={logo} alt="" />
            
        </div>
    );
};

export default Gift;