import React, { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './Checkout.css';
import { Form, Button } from 'react-bootstrap';
import CartEmpty from '../CartEmpty/CartEmpty';
import OrdeConfirm from '../OrderConfirm/OrdeConfirm';
import orderGenerated from '../../utils/orderGenerated';

const Checkout = () => {

    const { cartProduct, totalprice, totalItem, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState();
    const [validated, setValidated] = useState(false);
    const [valuesInput, setValuesInput] = useState({
        nombre: '',
        email: '',
        phone: ''
    });


    const handlerInputChange = (e) => {
        setValuesInput({
            ...valuesInput,
            [e.target.name]: e.target.value
        })
    };

    const sendOrder = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            orderGenerated(valuesInput, cartProduct, totalprice, setOrderId, clear)
        }

        setValidated(true);
    }


    if (orderId) {
        return <OrdeConfirm orderId={orderId} />
    }


    return (
        <div>
            {totalItem() === 0 ? <CartEmpty /> :
                <div className="form-container">
                    <h1>CONFIRMACION DE LA ORDEN</h1>
                    <Form noValidate validated={validated} onSubmit={sendOrder}>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label className="container-label">
                                Nombre completo
                            </Form.Label>
                            <Form.Control
                                className="container-input"
                                required
                                type="text"
                                placeholder="Ingresa tu nombre completo"
                                value={valuesInput.nombre}
                                name='nombre'
                                onChange={handlerInputChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Campo vacio.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label className="container-label">
                                Direccion de correo electronico
                            </Form.Label>
                            <Form.Control
                                className="container-input"
                                required
                                type="email"
                                placeholder="Ingresa tu email"
                                value={valuesInput.email}
                                name='email'
                                onChange={handlerInputChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Campo incorrecto o vacio.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label className="container-label">
                                Telefono
                            </Form.Label>
                            <Form.Control
                                className="container-input"
                                required
                                type="number"
                                placeholder="Ingresa tu telefono"
                                value={valuesInput.phone}
                                name='phone'
                                onChange={handlerInputChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Campo incorrecto o vacio.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            variant="success"
                            type="submit"
                            className="btn-checkout"
                        >
                            Enviar su orden
                        </Button>
                    </Form>
                </div>
            }
        </div>
    );
};

export default Checkout;


