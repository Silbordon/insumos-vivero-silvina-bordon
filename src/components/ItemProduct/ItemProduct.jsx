import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemProduct.css'


const ItemProduct = () => {
    return (
        <Card style={{ width: '18rem' }} className="container-card-item">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Product</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="success">Agregar</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemProduct;