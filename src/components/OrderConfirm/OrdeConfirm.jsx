import React from 'react';
import './OrderConfirm.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const OrdeConfirm = ({orderId}) => {
    return (
        <div className="confirm-container">
        <div className="confirm"></div>
        <div className="p-confirm">
        <p>Tu orden de pedido fue enviado con exito. En breve nos contactaremos con vos</p>
        <p style={{fontStyle:"italic"}}>Tu numero de pedido es: {orderId}</p>
        </div>
        <Link to="/">
          <Button variant="success" className="btn-confirm"> Home</Button>
        </Link>
      </div>
    );
};

export default OrdeConfirm;



