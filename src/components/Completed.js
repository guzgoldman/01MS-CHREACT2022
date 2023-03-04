import { Container, Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useCarrito } from './CustomProvider'


const Completed = ({formData}) => {

    const {carrito,vaciarCarrito,totalCarrito} = useCarrito () 

    useEffect(() => {
        return() => {vaciarCarrito()}
    })

    return(  
        <Container>
            <Row className='checkoutAlign'>
                <h2>¡Your purchase has been successful!</h2>
                <h3>¡Thank you!, we have sent you an email with all the information.</h3>
            </Row>
            <Row className='checkoutAlign'>
                <h3>Purchase summary:</h3>
                <div>NAME: {formData.name}</div>
                <div>LAST NAME: {formData.lastname}</div>
                <div>PHONE NUMBER: {formData.phone}</div>
                <div>EMAIL: {formData.email}</div>
            </Row>
            <Row className='detailAlign'>
                <Col></Col>
                <Col>Quantity</Col>
                <Col>Price</Col>
            </Row>
            {carrito.map((product) =>{
                    return(
                        <Row key={product.id} className='cartAlign'>
                            <Col>{product.title} ({product.category})</Col>
                            <Col>{product.cantidad}</Col>
                            <Col>USD {product.price} per unit.</Col>
                        </Row>
                    )})}
            <Row className='cartAlign'>
                <Col></Col>
                <Col></Col>
                <Col>Your total: USD {totalCarrito}</Col>
            </Row>
        </Container>
    )
}

export default Completed