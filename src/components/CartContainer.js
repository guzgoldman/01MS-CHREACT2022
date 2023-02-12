import { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import { useCarrito } from './CustomProvider'
import CartList from './CartList'

const CartContainer = () => {
    
    const {carrito} = useCarrito()
    const [carritoEmpty,setCarritoEmpty] = useState(true)

    useEffect( () =>{
        carrito.length === 0 ? setCarritoEmpty(true) : setCarritoEmpty(false)
    },[carrito])

    return (
        <>
        {carritoEmpty ? <Container className='loadingPages'>Your cart is empty</Container> : <CartList/>}
        </>
    )
}


export default CartContainer