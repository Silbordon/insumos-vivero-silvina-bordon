import React from 'react';
import './Cart.css'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Button, Stack, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartEmpty from '../CartEmpty/CartEmpty';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cartProduct, totalprice, totalItem, removeItem, clear } = useContext(CartContext)

    return (
        <div >
            {totalItem() === 0 ? <CartEmpty /> :

                <div className="display">
                    <div className='container-cart-items'>
                        <Stack gap={3} >
                            <h2>DETALLES DE TUS PRODUCTOS</h2>
                            {cartProduct.map((product) => (
                                <div className="bg-light border" key={product.id}>
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="bg-light p-2 me-auto">{product.title}
                                        </div>
                                        <div className="bg-light me-auto">{product.price}$ por unidad
                                        </div>
                                        <div className="bg-light">Unidades solicitadas: {product.initial}
                                        </div>
                                        <Button variant="outline-danger" >
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                onClick={() => removeItem(product.id)}
                                            />
                                        </Button>
                                    </Stack>
                                </div>
                            ))}
                        </Stack>
                    </div>
                    <div className='container-cart-items'>
                        <Card style={{ height: '100%' }}>
                            <Card.Header as="h2">TU COMPRA</Card.Header>
                            <Card.Body>
                                <Card.Title>Monto Total a abonar</Card.Title>
                                <Card.Text>
                                    ${totalprice()}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <div>
                                        <Button
                                            variant="danger"
                                            onClick={() => clear()}
                                        >Vaciar carrito
                                        </Button>
                                    </div>
                                    <Link to="/checkout">
                                        <Button
                                            variant="success"
                                        >Confirma tu orden de pedido
                                        </Button>
                                    </Link>
                                   
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            }

        </div>
    );
};

export default Cart;