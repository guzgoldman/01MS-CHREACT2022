import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  CustomProvider  from "./CustomProvider";

function App() {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
            <ToastContainer/>
        </CustomProvider>
    );
}

export default App;

// create a CartProvider component