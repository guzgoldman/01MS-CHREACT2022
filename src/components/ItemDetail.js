import { useState } from 'react'
import { useCarrito } from './CustomProvider'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const ItemDetail = ({ producto }) => {


    console.log(producto)

    const [confirmado, setConfirmado] = useState(false)
    const [cantidad, setCantidad] = useState(0)
    const {agregarProducto} = useCarrito()

    const onAdd = (parametro) => {
        setCantidad(parametro)
        setConfirmado(true)
    }

    const handleClick = () => {
        agregarProducto(producto, cantidad)
        toast.success(`You added x${cantidad} "${producto.title}" to cart`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
        });
    };

    return (
        <Row>
            <Col className='row' md={6}><img src={producto.img} alt={producto.title} /></Col>
            <Col className='productInfo' md={6}>
                <h1>{producto.title} ({producto.category})</h1>
                <h4>{producto.artist}</h4>
                <p className='desc'>{producto.description}</p>
                <span>USD {producto.price}</span>
                <ItemCount stock={producto.stock} onAdd={onAdd} />
                {confirmado && <Button className='finalBtn abtn' onClick={handleClick}>Add to cart</Button>}
            </Col>
        </Row>
    );
}

export default ItemDetail