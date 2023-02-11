import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <section className='cards'>
            {products.map((producto) => {
                return (
                    <div>
                        <Item producto={producto} key={producto.id} />
                    </div>
                )
            })}
        </section>
    )
}
export default ItemList