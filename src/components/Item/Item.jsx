import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Item.css'

//card de cada item
const Item = ({result}) => {
    
    const {title, description, price, pictureUrl} = result
    return (
        <Card style={{ width: '18rem' }}  border="light" bg="light">
            <Card.Img variant="top" src={pictureUrl}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="bstext">Precio: {price}</Card.Text>
                <Button variant="success" >Ver Más</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;