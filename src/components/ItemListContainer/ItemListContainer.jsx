import React from 'react';
import ItemProduct from '../ItemProduct/ItemProduct';
import './ItemListContainer.css'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';


const ItemListContainer = ({ title }) => {

    const [initial, setInitial] = useState(1)


    return (
        <div className="itemList-Container">
            <h1>{title}</h1>
            <ItemCount 
                stock= {5} 
                initial= {initial}
                setInitial = {setInitial}
            />
            <Row xs={1} md={2} lg={5} className="g-4">
                    {Array.from({ length: 7 }).map((_, idx) => (
                        <Col className="container-item">
                            <ItemProduct></ItemProduct>
                        </Col>
                    ))}
                </Row> 
        </div>
    );
};

export default ItemListContainer;