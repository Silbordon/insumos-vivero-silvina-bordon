import React, { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './Checkout.css';
import { Form, Button } from 'react-bootstrap';
import CartEmpty from '../CartEmpty/CartEmpty';
import { collection, addDoc, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import OrdeConfirm from '../OrderConfirm/OrdeConfirm';


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
            orderGenerated()
        }
        
        setValidated(true);
    }

    //firebase
    const orderGenerated = async() => {
        const order = {
            buyer: valuesInput,
            items: cartProduct,
            total: totalprice(),
            dateHs : Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db);
        const orderRef = collection(db, 'orders');
        const allProductRef = collection(db, 'items')

        const q = query(allProductRef, where(documentId(), 'in', cartProduct.map((el) => el.id)))
        const products = await getDocs(q);
        const outstock = [];

       products.docs.forEach((doc) =>{
            const item = cartProduct.find((el) => el.id === doc.id)

            if(doc.data().stock >= item.initial){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.initial
                })
            }else{
                outstock.push(item)
            }
        })

        if(outstock.length === 0){
            addDoc(orderRef, order)
                .then((doc) =>{
                    batch.commit()
                    setOrderId(doc.id)
                    clear()
                })
        }else{
            alert("Hay productos sin stock, te solicitamos revises tus productos seleccionados")
        }
    }

   

    if(orderId) {
        return <OrdeConfirm orderId={orderId}/>
    }

    

    return (
        <div>
            {totalItem() === 0 ? <CartEmpty /> :
                <div className="form-container">
                    <h1>CONFIRMACION DE LA ORDEN</h1>

                    <Form noValidate validated={validated} onSubmit={sendOrder}>

                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ingresa tu nombre completo"
                                value={valuesInput.nombre}
                                name='nombre'
                                onChange={handlerInputChange}
                            />
                            <Form.Control.Feedback>correcto!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Campo incorrecto o vacio.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Direccion de correo electronico</Form.Label>                    <Form.Control
                                required
                                type="email"
                                placeholder="Ingresa tu email"
                                value={valuesInput.email}
                                name='email'
                                onChange={handlerInputChange}
                            />
                            <Form.Control.Feedback>correcto!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Campo incorrecto o vacio.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Ingresa tu telefono"
                                value={valuesInput.phone}
                                name='phone'
                                onChange={handlerInputChange}
                            />
                            <Form.Control.Feedback>correcto!</Form.Control.Feedback>
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


