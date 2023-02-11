import Navbar from "./Navbar";
import { Link } from "react-router-dom"

const Header = ({children}) => {
    const isHeader = true
    return (
        <>
            <header className="header">
                <Link to="/">
                    <h1 className="header__title">0&1 <br />Music Store</h1>
                </Link>
                {children}
                <Navbar
                    isHeader={isHeader}
                />
            </header>
        </>
    )
}

export default Header