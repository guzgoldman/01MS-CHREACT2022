import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"
import { Nav } from 'react-bootstrap'

const Navbar = () => {
    const linkData = [
        {path: '/', nombre:'all'},
        {path: '/category/cd', nombre:'cd'},
        {path: '/category/vinyl', nombre:'vinyl'}
    ]
    return (
        <nav className="nav">
            {linkData.map(({path, nombre}) =>(
                <Nav.Link as={NavLink} to={path} key={nombre}>
                    {nombre}
                </Nav.Link>
            ))}
            <NavLink to="/cart">
                <CartWidget/>
            </NavLink>
        </nav>
    )
}

export default Navbar