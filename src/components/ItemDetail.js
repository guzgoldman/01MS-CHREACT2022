import { useState } from 'react'
import { useCarrito } from './CustomProvider'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';



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
        toast.success(`You added ${cantidad} ${producto.title} to cart`, {
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
        <div className='detail'>
            <img src={producto.img} alt="" />
            <ul>
                <li>{producto.title}</li>
                <li>USD{producto.price}</li>
            </ul>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
            {confirmado && <Button onClick={handleClick} id="Añadiracarrito" >Add to cart</Button>}
            <Link to="/"><Button id='Backtoproducts' >Back</Button> </Link>
        </div>
    );
}

export default ItemDetail