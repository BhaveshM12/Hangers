import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link, useSearchParams } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
    const[open, setOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className= "item">
                        <img src="/img/flag.png" alt="Hello" />
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className= "item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className= "item">
                        <Link className="link" to="/products/1">Wodden</Link>
                    </div>
                    <div className= "item">
                        <Link className="link" to="/products/2">Metal</Link>
                    </div>
                    <div className= "item">
                        <Link className="link" to="/products/3">Premium</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">HANGERS</Link>
                </div>
                <div className="right">
                <div className="item">
                    <Link className="link" to="/">HomePage</Link>
                </div><div className="item">
                    <Link className="link" to="/">About</Link>
                </div><div className="item">
                    <Link className="link" to="/">Contact</Link>
                </div><div className="item">
                    <Link className="link" to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <AccountCircleOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cart-icon" onClick={() => setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span>0</span>
                    </div>
                    
                </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}
export default Navbar;