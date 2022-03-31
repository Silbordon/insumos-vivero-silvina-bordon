import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from '../Item/Item';
import './ItemList.css'
import Loading from '../Loading/Loading';

// contenedor de las item-card
const ItemList = (props) => {
    const { results, loading } = props


  if (loading || !results) {
    return <Loading />;
  }
    return (
        <Row xs={1} md={2} lg={5} className="g-4">
            {results.map((result) => (
                <Col 
                    className="container-item" 
                    key={result.id}>
                        <Item
                            result={result} 
                        />
                </Col>
            ))}
        </Row>
    );



};

export default ItemList;