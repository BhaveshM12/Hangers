import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Contact from "../../components/Contact/Contact";
const Home = () =>{
    return(
        <div className="home">
            <Slider/>
            <FeaturedProducts type="Featured" />
            <Categories/>
            <FeaturedProducts type="Trending" />
            <Contact/>
        </div>
    )
}
export default Home;