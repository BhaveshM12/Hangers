import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () =>{
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setquantity] = useState(1);
    const images= ["https://images.pexels.com/photos/14560435/pexels-photo-14560435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9850406/pexels-photo-9850406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
];
    return(
        <div className="product">
            <div className="left"> 
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1 )}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$199</span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="quantity" >
                    <button onClick={()=>setquantity((prev)=>prev===1? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=>setquantity((prev)=>prev+1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: Hanger</span>
              <span>Tag: Hanger, Wooden, Home</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
            </div>
        </div>
    )
};
export default Product;