import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify' 



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const productsCollection = collection(db, "products")
        let filter = query(productsCollection)
        if (categoryId) {
            filter = query(
                productsCollection,
                where("category", "==", categoryId)
            );
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
                const products = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
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
            })
            .catch((error) => {
                console.log(error);
                toast.error("Error" + error.message)
            })
    }, [categoryId])

    return (
        <section class="products">
            <div class="container">
                <div class="row">
                    <h2>Store</h2>
                    <div id="products" class="row col-lg-12">
                        <ItemList products={products}/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ItemListContainer