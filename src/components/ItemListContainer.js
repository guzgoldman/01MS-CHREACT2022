import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [categoryExists, setCategoryExists] = useState(true)

    useEffect(() => {
        const productsCollection = collection(db, "products")
        let filter
        
        if (category) {
            filter = query(productsCollection, where('category', '==', category))
        } else {
            filter = productsCollection
        }

        const getProducts = getDocs(filter)
        toast.info("Loading...", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark"
        });
        getProducts
            .then((res) => {
                const products = res.docs.map(doc => ({ 
                    ...doc.data(), 
                    id: doc.id 
                }))
                if (!(products.length === 0)) {
                    setProducts(products)
                    toast.dismiss()
                    toast.success("Loaded", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0,
                        theme: "dark"
                    });
                    setCategoryExists(true)
                } else {
                    setCategoryExists(false)
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Error" + error.message)
            })
    }, [category])

    return (
        <ItemList products={products}/>
    )
}


export default ItemListContainer