import React from 'react'
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {
    const { totalProducto } = useCarrito();
    return (
        <div>
            <span className='material-icons header__link'>shopping_cart</span>
            <div className='cart__amount'>{totalProducto()}</div>  
        </div>
    )
}

export default CartWidget