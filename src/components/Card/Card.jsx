import React from "react";
import "./Card.scss";
import {Link} from "react-router-dom"
import { ListItemSecondaryAction } from "@mui/material";
const Card = ({item}) =>{
    return(
        <Link className="link" to ={`/product/${item.id}`}>
        <div className="card">
            <div className='image'>
             {item.isNew && <span>New Seasons</span>}
                <img src={item.img} alt="" className="mainImg" />
                <img src={item.img2} alt="" className="secondaryImg"/>
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
        </Link>
    )
}
export default Card;