import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className="container-cartIcon">
            <Link to="/cart">
                <button className="btn-cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </Link>
            <span> 0</span>
        </div>
    );
};

export default CartWidget;