import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './Item.css'
import { useState } from 'react';

//card de cada item
const Item = ({ result }) => {
    const { title, price, pictureUrl, id } = result

    const [modalShow, setModalShow] = useState(false);

    return (
        <Card style={{ width: '17rem', height:'27rem' }} border="light" bg="light" className='cardcontainer'>
            <Card.Img variant="top" src={pictureUrl} className='card-img-item' />
            <Card.Body className="card-body-item">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="bstext">Precio: {price}</Card.Text>
                <Button variant="success" onClick={() => setModalShow(true)}>Ver Más</Button>
                {modalShow ? <ItemDetailContainer
                    id={id}
                    modalShow={modalShow}
                    setModalShow={setModalShow}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> : null}
            </Card.Body>
        </Card>
    );
};


export default Item;