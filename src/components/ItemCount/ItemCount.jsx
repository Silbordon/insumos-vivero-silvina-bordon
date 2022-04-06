import './ItemCount.css'
import { Card, Button, Stack } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const ItemCount = ({ stock, initial, setInitial, price, handlerAdd, hide, btnBuy}) => {

    const [disableAdd, setdisableAdd] = useState(true)
    const [disableDelet, setdisableDelet] = useState(true)

    useEffect(() => {
        if (initial === 1) {
            setdisableDelet(false)
        }

        if (initial === stock) {
            Swal.fire('es tu oportunidad!', 'este es el ultimo disponible', 'info')
            setdisableAdd(false)
        }
        if (initial > stock) {
            Swal.fire('"UPS!', 'no hay mas productos disponibles', 'error')
        }
        return () => { }
    }, [initial])

    const addfunction = () => {
        if (initial <= stock) {
            setInitial(initial + 1)
            setdisableAdd(true)
            setdisableDelet(true)
        }
    }

    const deletefunction = () => {
        if (initial > 1) {
            setInitial(initial - 1)
            setdisableDelet(true)
            setdisableAdd(true)
        }
    }
    return (
        <Card className='container-btnCounter'>
            <Card.Header as="h5" className="title-card-btnCounter">Precio por unidad: {price}</Card.Header>
            <Card.Body >
                <div className="container-counter">
                    <Button
                        disabled={!disableAdd}
                        variant="outline-secondary"
                        onClick={() => addfunction()}
                    >+</Button>
                    <p>{initial}</p>
                    <Button
                        disabled={!disableDelet}
                        variant="outline-secondary"
                        onClick={() => deletefunction()}
                    >-</Button>
                </div>
                {!btnBuy ? <Button
                    onClick={handlerAdd}
                    className="btn-cart"
                    variant="success">
                    Agregar al carrito
                </Button> :
                    <div >
                        <Stack gap={2} className="col-md-5 mx-auto btn-extras">
                            <Link to="/">
                                <Button
                                    onClick={() => hide()}
                                    variant="outline-dark"
                                    size="sm"
                                    className='btn-cart-extras'
                                >Seguir Comprando
                                </Button>

                            </Link>
                            <Link to="/cart">
                                <Button
                                    onClick={() => hide()}
                                    variant="outline-secondary"
                                    size="sm"
                                    className='btn-cart-extras'
                                >Terminar Compra
                                </Button>
                            </Link>

                        </Stack>
                    </div>
                }

            </Card.Body>
        </Card>
    );
};

export default ItemCount;