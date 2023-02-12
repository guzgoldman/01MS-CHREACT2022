import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap'
import { useCarrito } from './CustomProvider'

const CartList = () => {

    const {carrito, eliminarProducto, vaciarCarrito, totalCarrito} = useCarrito()
    const handleClick = id => () => eliminarProducto(id)

    return(
        <Container className='paddingTop'>
            <Row className='detailAlign'>
                <Col></Col>
                <Col>Product</Col>
                <Col>Quantity</Col>
                <Col>Unitary price</Col>
                <Col>Delete</Col>
            </Row>
            {carrito.map((product) =>{
                return(
                    <Row key={product.id} className='cartAlign'>
                        <Col><img src={product.img} className='imgCart' alt={product.title}/></Col>
                        <Col>{product.title} <br /> ({product.category})</Col>
                        <Col>{product.cantidad}</Col>
                        <Col>USD {product.price}</Col>
                        <Col><Button onClick={handleClick(product.id)} variant='secondary'>Delete</Button></Col>                        </Row>
                    )})}
            <Row className='cartAlign'>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col>Your total: USD {totalCarrito}</Col>
                <Col className='btnCart'>
                    <Button as={Link} to='/checkout' variant='dark'>Proceed to checkout</Button>
                    <Button onClick={vaciarCarrito} variant='secondary'>Empty your cart</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartList