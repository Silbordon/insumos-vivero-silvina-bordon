import React from 'react';
import './ItemDetail.css'
import { Modal } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';

const ItemDetail = (props) => {
    console.log(props);
    const {data} = props
    const [initial, setInitial] = useState(1)

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row className="container-modal">
                            <Col xs={12} md={8} lg={6} className="container-modal-col" >
                                <div >
                                    <img src={data.pictureUrl} style={{ width: '100%' }} alt="" />
                                    <div className="container-text">
                                        <h5>Caracteristicas</h5>
                                        <p>
                                           {data.description}
                                        </p>
                                        <h6>Recomendaciones para su Cuidado:</h6>
                                        <p>{data.recomendation}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={6} className="container-modal-col">
                                <ItemCount
                                    price={data.price}
                                    stock={5}
                                    initial={initial}
                                    setInitial={setInitial}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }


export default ItemDetail;