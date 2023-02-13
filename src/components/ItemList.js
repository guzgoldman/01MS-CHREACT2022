import React from 'react'
import Item from './Item'
import Col from 'react-bootstrap/Col'

const ItemList = ({ products }) => {
    return (
        <section className='row'>
            {products.map((producto) => {
                return (
                    <Col className="cardM" md>
                        <Item producto={producto} key={producto.id} />
                    </Col>
                )
            })}
        </section>
    )
}
export default ItemList