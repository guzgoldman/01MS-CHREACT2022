import { useState } from "react"
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useCarrito } from "./CustomProvider";

const Carrito = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const { carrito, vaciarCarrito, eliminarProducto } = useCarrito()
    const [idVenta, setIdVenta] = useState ("")

    const handleClick = (e) => {
        const orden = {
            usuario: {
                nombre: nombre,
                email: email,
                telefono: telefono,
            },
            productos: [],
            fecha: serverTimestamp(),
            total: totalAPagar(),
        }
        const ventasCollection = collection(db, "ventas")
        const pedido = addDoc(ventasCollection, orden)
        pedido
            .then((resultado) => {
                setIdVenta(resultado.id)
            })
            .catch(error => {
                toast.error(` Error : ${error} `, {
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
        toast.success(`Your purchase ID: ${idVenta} `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
        });
    }
    function handleNombreChange(event) {
        setNombre(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleTelefonoChange(event) {
        setTelefono(event.target.value);
    }

    function precioTotalProducto (producto){
        let total = 0;
        total += producto.precio * producto.cantidad
        return total
    }
    
    const totalAPagar = () => {
        let total = 0;
        carrito.forEach(producto => {
            total += precioTotalProducto(producto)
        });
        return total
    }
    
    const deleteItem = (producto) => {
        eliminarProducto(producto);
        toast.dismiss();
        toast.error(`You deleted ${producto.cantidad} ${producto.producto} successfully `, {
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

    if (carrito ? carrito.length === 0 : true)
        return (
            <div className="carrito">
                <h1>Your cart is empty</h1>
            </div>
        )
    return (
        <div className="carrito">
            <h1>Finalize your purchase</h1>
            <Button variant="danger" onClick={vaciarCarrito } >Empty cart</Button>
            {
                carrito.map((producto) => {
                    return (
                        <div className="producto">
                            <img src={producto.imagen} alt="" />
                            <h3>{producto.producto}</h3>
                            <p>Price:  ${producto.precio} Ars</p>
                            <p>Quantity: {producto.cantidad}</p>
                            <p>Product total: ${precioTotalProducto(producto)} </p>
                            <Button id="EliminarProducto" variant="danger" onClick={() => deleteItem(producto)}>Remove from cart</Button>
                        </div>
                    )
                }
                )
            }
            <div className="Totalapagar">
                <h2>Cart total: USD{totalAPagar()}</h2>
            </div>
            <Form className="Payform">
                <Form.Text>
                    Please fill all the fields. Your data won't be shared to anyone.
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>e-Mail</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="e-Mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={nombre} onChange={handleNombreChange} placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" value={telefono} onChange={handleTelefonoChange} placeholder="Phone Number" />
                </Form.Group>
                <Button disabled={!nombre || !email || !telefono} onClick={handleClick} >Finalize your purchase</Button>
            </Form>
        </div>
    )
}

export default Carrito