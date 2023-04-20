import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
    const data = [{ id: 1,
        img: "https://images.pexels.com/photos/14560435/pexels-photo-14560435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/9850406/pexels-photo-9850406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Long Sleeve Graphic T-Shirt",
        desc : "Lorem ipsum slveee sum rem lo klisdf slidfnl kjldj fkl iijl ijeir i t ine lisej ilsnel nvlie ",
        isNew: true,
        oldPrice: 19,
        price:7,
       },
       { id: 1,
        img: "https://images.pexels.com/photos/7746098/pexels-photo-7746098.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        img2:"https://images.pexels.com/photos/11251271/pexels-photo-11251271.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Long Sleeve Graphic T-Shirt",
        desc : "Lorem ipsum slveee sum rem lo klisdf slidfnl kjldj fkl iijl ijeir i t ine lisej ilsnel nvlie ",
        isNew: true,
        oldPrice: 19,
        price:5,
       }]
    return (
        <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className='item' key={item}>
                <img src={item.img} alt="" />
                <div className='details'> 
                <h1>{item.tile}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className='price'>
                1 x ${item.price} </div>
                </div>
                <DeleteOutlinedIcon className = "delete" />
            </div>
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>$12</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart