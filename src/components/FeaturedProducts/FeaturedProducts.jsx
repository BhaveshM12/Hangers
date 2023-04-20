import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
 const FeaturedProducts = ({type}) => {
    const data = [
       { id: 1,
        img: "https://images.pexels.com/photos/14560435/pexels-photo-14560435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/9850406/pexels-photo-9850406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Premium Wodden Hangers",
        isNew: true,
        oldPrice: 9,
        price:7,
       },
       { id: 1,
        img: "https://images.pexels.com/photos/7746098/pexels-photo-7746098.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        img2:"https://images.pexels.com/photos/11251271/pexels-photo-11251271.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Royal Theme Hangers",
        isNew: true,
        oldPrice: 9,
        price:5,
       },{ id: 1,
        img: "https://images.pexels.com/photos/14579191/pexels-photo-14579191.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/10558196/pexels-photo-10558196.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Designer Hangers",
        isNew: false,
        oldPrice: 19,
        price:12,
       },
       { id: 1,
        img: "https://images.pexels.com/photos/8483478/pexels-photo-8483478.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/3312030/pexels-photo-3312030.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Premium Black Collection",
        isNew: false,
        oldPrice: 19,
        price:12,
       },

    ]
    
    return(
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        <div className="bottom">
            {data.map( item => (
                <Card item ={item} key={item.id} />
            ))}
        </div>
        </div>
    )
 }

 export default FeaturedProducts;