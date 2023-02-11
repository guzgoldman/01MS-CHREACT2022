import { Link } from "react-router-dom";

const Filter = () => {
    return (
        <>
            <Link className="header__link" to="/">All</Link>
            <Link className="header__link" to="/category/cd">CD</Link>
            <Link className="header__link" to="/category/vinyl">Vinyl</Link>
        </>
    ) 
}    

export default Filter