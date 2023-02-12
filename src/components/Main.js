import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import CartContainer from './CartContainer';
import CartCheckout from './CartCheckout';


function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='/checkout' element={<CartCheckout/>}/>
            </Routes>
        </main>
    );
}
export default Main;