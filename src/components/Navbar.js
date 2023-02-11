import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"
import Filter from './Filter'

const Navbar = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="nav">
                <Filter/>
                <NavLink to="/cart">
                    <CartWidget/>
                </NavLink>
            </nav>
        )
    } else {
        return (
            <nav className="nav">
                <a href={hrefLinkFooter}>{textLinkFooter}</a>
            </nav>
        )
    }
}

export default Navbar