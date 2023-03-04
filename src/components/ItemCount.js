import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, onAdd }) => {
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
    return (
        <div className='itemCount'>
            <div className='pbtn'>
                <Button className='btn1 abtn' disabled={contador === 0} onClick={handleRestar}>-</Button>
                <p className='count'>{contador}</p>
                <Button className='btn1 abtn' disabled={contador === stock} onClick={handleSumar}>+</Button>
            </div>
            <br />
            <div className='fbtn'>
                {<Button className='btn2 abtn' disabled={contador < 1 || stock < 1} onClick={handleConfirmar}>Confirmar</Button>}
            </div>
        </div>
    )
}
export default ItemCount