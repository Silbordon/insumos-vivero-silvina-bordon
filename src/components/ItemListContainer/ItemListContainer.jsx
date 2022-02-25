import React from 'react';
import ItemProduct from '../ItemProduct/ItemProduct';
import './ItemListContainer.css'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = ({ title }) => {
    return (
        <div className="itemList-Container">
            <h1>{title}</h1>
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