import React, { useContext, useState} from 'react';
import './ItemDetail.css'
import { Modal } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Row, Col, Container} from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const ItemDetail = (props) => {
    const {result} = props
    const {id, title, description, recomendation, price, stock, pictureUrl} = result

    const [initial, setInitial] = useState(1)
    const [btnBuy, setBtnBuy] = useState(false)
    const {addItem, isInCart} = useContext (CartContext)

    const handlerAdd = () =>{
        if(!isInCart(id)){
            const itemCart = {
                id,
                price,
                initial,
                title
             }
            //  props.onHide()
             addItem(itemCart);
        }else{
            alert('tienes este producto repetido en el carrito')
        }
        setBtnBuy(true)
    }
   

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row className="container-modal">
                            <Col xs={12} md={8} lg={6} className="container-modal-col" >
                                <div >
                                    <img src={pictureUrl} style={{ width: '100%' }} alt="" />
                                    <div className="container-text">
                                        <h5>Caracteristicas</h5>
                                        <p>
                                           {description}
                                        </p>
                                        <h6>Recomendaciones para su Cuidado:</h6>
                                        <p>{recomendation}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={6} className="container-modal-col">
                                <ItemCount
                                    btnBuy={btnBuy}
                                    hide={props.onHide}
                                    handlerAdd = {handlerAdd}
                                    price={price}
                                    stock={stock}
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