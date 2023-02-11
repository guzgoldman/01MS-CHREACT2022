import React from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { db } from '../firebase'
import { collection, getDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    useEffect(() => {
        toast.info(`Loading...`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
        });
        const productosCollection = collection(db, "productos")
        const referencia = doc(productosCollection, id)
        const pedido = getDoc(referencia)
        pedido
            .then((respuesta) => {
                const producto = respuesta.data()
                setProducto(producto)
                toast.dismiss()
                toast.success(`Loaded`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "dark",
                });
            })
            .catch((error) => {
                toast.dismiss()
                toast.error("There was an error, try again" + error)
            })
    }, [id])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )

}

export default ItemDetailContainer