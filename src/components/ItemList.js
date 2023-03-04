import React from 'react'
import Item from './Item'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'

const ItemList = ({ products }) => {
    return (
        <Row>
            {products.map((producto) => {
                return (
                    <Col className="cardM" md={4}>
                        <Item producto={producto} key={producto.id} />
                    </Col>
                )
            })}
        </Row>
    )
}
export default ItemList