import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, onAdd     }) => {
    const [contador, setContador] = useState(0)
    const handleSumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const handleRestar = () => {
        setContador(contador - 1)
    }
    const handleConfirmar = () => {
        onAdd(contador)
    }
    const handleResetear = () => {
        setContador(0)
    }
    return (
        <div className='itemCount'>
            <Button onClick={handleResetear}>Reset</Button>
            <br />
            <Button disabled={contador === stock} onClick={handleSumar}>+</Button>
            <p>{contador}</p>
            <Button disabled={contador === 0} onClick={handleRestar}>-</Button>
            <br />
            {<Button disabled={contador < 1 || stock < 1} onClick={handleConfirmar}>Confirmar</Button>}
        </div>
    )
}
export default ItemCount