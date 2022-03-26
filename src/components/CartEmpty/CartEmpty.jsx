import React from 'react';
import './CartEmpty.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CartEmpty = () => {
    return (
        <div className="empty-container">
        <div className="mens-empty"></div>
        <p>Tu carrito de compras esta vacio</p>
        <Link to="/">
          <Button variant="success"> Home</Button>
        </Link>
      </div>
    );
};

export default CartEmpty;