import React, { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './Checkout.css';
import { Form, Button } from 'react-bootstrap';
import CartEmpty from '../CartEmpty/CartEmpty';
import OrdeConfirm from '../OrderConfirm/OrdeConfirm';
import orderGenerated from '../../utils/orderGenerated';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Checkout = () => {

    const { cartProduct, totalprice, totalItem, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState();

    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            phone: ''
        },
        validationSchema: yup.object({
            nombre: yup.string().matches(/^([A-Z a-z]+[\s]*)+$/, 'solo se aceptan letras').required("nombre  obligatorio*"),
            email: yup.string().email("no es un email valido").required("email obligatorio*"),
            phone: yup.number().required("telefono de contacto obligatorio")
        })
        ,
        onSubmit: () => {
            orderGenerated(formik.values, cartProduct, totalprice, setOrderId, clear)
        }
    })
    
    if (orderId) {
        return <OrdeConfirm orderId={orderId} />
    }


    return (
        <div>
            {totalItem() === 0 ? <CartEmpty /> :
                <div className="form-container">
                    <h1>CONFIRMACION DE LA ORDEN</h1>
                    <Form onSubmit={formik.handleSubmit} >
                        <Form.Group controlId="validationCustom04">
                            <Form.Label className="container-label">
                                Nombre completo
                            </Form.Label>
                            <Form.Control
                                className="container-input"
                                required
                                type="text"
                                placeholder="Ingresa tu nombre completo"
                                name='nombre'
                                onChange={formik.handleChange}
                            />
                            <Form.Text className="  text-danger" >
                                {formik.errors.nombre}
                            </Form.Text>
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
                                name='email'
                                onChange={formik.handleChange}
                            />
                            <Form.Text className="  text-danger" >
                                {formik.errors.email}
                            </Form.Text>
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
                                name='phone'
                                onChange={formik.handleChange}
                            />
                            <Form.Text className="  text-danger" >
                                {formik.errors.phone}
                            </Form.Text>
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


