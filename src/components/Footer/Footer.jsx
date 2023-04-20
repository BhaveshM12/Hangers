import React from "react";
import "./Footer.scss";
const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Wooden Hangers</span>
                    <span>Metal Hangers</span>
                    <span>Premium Hangers</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>Blogs</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                    <span>FAQ</span>
                    <span>Privacy</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </div>
            </div>
            <div className="bottom">
               <div className="left">
               <div className="logo">HANGERS</div>
               <div className="copyright">© 2023, HANGERS. All rights reserved.</div>
               </div>
               <div className="right">
                <img src="/img/payment.png" alt=""></img>
               </div>
            </div>
        </div>
    )
}
export default Footer;