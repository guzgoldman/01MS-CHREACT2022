import Navbar from "./Navbar";
import { Link } from "react-router-dom"

const Header = ({children}) => {
    const isHeader = true
    return (
        <>
            <header className="header">
                <Link to="/">
                   <h1>Hola</h1>
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
