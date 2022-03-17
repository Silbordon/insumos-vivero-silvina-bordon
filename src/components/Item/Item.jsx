import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './Item.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

//card de cada item
const Item = ({ result }) => {
    const { title, price, pictureUrl, id } = result

    const [modalShow, setModalShow] = useState(false);

    return (
        <Card style={{ width: '18rem' }} border="light" bg="light" className='container-card'>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="bstext">Precio: {price}</Card.Text>
                {/* <Link to={`/item/${id}`}> */}
                <Button variant="success" onClick={() => setModalShow(true)}>Ver Más</Button>
                {modalShow ? <ItemDetailContainer
                    id={id}
                    modalShow={modalShow}
                    setModalShow={setModalShow}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> : null}
                {/* </Link> */}
              
                
                
            </Card.Body>
        </Card>
    );
};


export default Item;