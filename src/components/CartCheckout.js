import { useState } from 'react'
import { Button, Container, Col, Form, Row } from 'react-bootstrap'
import Checkout from './Checkout'

const CartCheckout = () => {
    
    const [validated,setValidated] = useState(false)
    const [showCheckout,setShowCheckout] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        confirmEmail: '',
    })
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            event.preventDefault()
            setShowCheckout(true)
        }
        setValidated(true)      
    }
    
    return (
    <Container className='paddingTop'>
        {showCheckout ? (<Checkout formData={formData}/>) 
        : (
            <Row className='justify-content-md-center'>
                <Col xs={6} className='formCheckout'>
                    <h3>Enter the following data to finalize your purchase</h3>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId='formName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Enter your name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Please, enter your name.
                            </Form.Control.Feedback>
                        </Form.Group>
            
                        <Form.Group controlId='formLastname'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Enter your last name'
                                name='lastname'
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Please, enter your last name
                            </Form.Control.Feedback>                    
                        </Form.Group>
            
                        <Form.Group controlId='formPhone'>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                required
                                type='number'
                                placeholder='Enter your phone number'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Please, enter a valid phone number
                            </Form.Control.Feedback>
                        </Form.Group>
            
                        <Form.Group controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='Enter your email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Please, enter a valid email
                            </Form.Control.Feedback>
                        </Form.Group>
            
                        <Form.Group controlId='formConfirmEmail'>
                            <Form.Label>Email confirmation</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='Confirm your email'
                                name='confirmEmail'
                                value={formData.confirmEmail}
                                pattern={formData.email}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Please, enter the same email as above.
                            </Form.Control.Feedback>
                        </Form.Group>
            
                        <Button variant='dark' type='submit'>
                            Finalize your purchase
                        </Button>
                    </Form>
                </Col>
            </Row>
        )}
    </Container>
    )
}


export default CartCheckout