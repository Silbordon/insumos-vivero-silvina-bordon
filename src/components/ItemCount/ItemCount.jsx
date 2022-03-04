import './ItemCount.css'
import { Card, Button } from 'react-bootstrap';

const ItemCount = ({stock, initial, setInitial}) => {
  
    const addfunction = () =>{
        if(initial < stock){
            setInitial(initial +1)
        } else{
            alert("UPS! :( no hay mas productos disponibles")
        }
    }

    const deletefunction = () =>{
        if(initial > 0){
            setInitial(initial -1)
        }
    }
    return (
        <Card className='container-btnCounter'>
            <Card.Header as="h5" className="title-card-btnCounter">Producto</Card.Header>
            <Card.Body>
                <div className="container-counter">
                    <Button 
                        variant="outline-secondary"
                        onClick={() => addfunction()}
                        >+</Button>
                    <p>{initial}</p>
                    <Button 
                        variant="outline-secondary" 
                        onClick={() => deletefunction()}
                        >-</Button>
                </div>
                <Button 
                    className="btn-cart" 
                    variant="outline-success">
                        Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ItemCount;