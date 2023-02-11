import { createContext, useContext, useState } from "react"


const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}
    const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    //const [totalProductos, setTotalProductos] = useState(0);
    
    const agregarProducto = (producto, cantidad) => {
        if(estaEnCarrito(producto.id)){
            setCarrito(
                carrito.map((x) => {
                    return x.id === producto.id ? 
                    {...x, cantidad: x.cantidad + cantidad} : x
                })
            )
        }else{
            setCarrito([...carrito, {...producto, cantidad: cantidad}])   
        }
    }
    
    const eliminarProducto = (producto) => {
        const newCarrito = carrito.filter((e) => e.producto !== producto.producto);
        setCarrito(newCarrito);
        return newCarrito
    };

    
    const vaciarCarrito = () => {
        setCarrito([])
        totalProducto(0)
    }
    
    const estaEnCarrito = (id) => {
        carrito.find((x) => x.id === id)
    }

    const totalProducto = (producto) => {
        let total = 0;
        carrito.forEach(producto => {
            total = total + producto.cantidad
        })
        return total;
    }


    
    const valorDelContexto = {
        carrito: carrito,
        setCarrito: setCarrito,
        totalProducto: totalProducto,
        agregarProducto: agregarProducto,
        vaciarCarrito: vaciarCarrito,
        estaEnCarrito: estaEnCarrito,
        eliminarProducto: eliminarProducto,
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
export default CustomProvider