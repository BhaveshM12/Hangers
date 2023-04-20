import React from "react";
import "./Contact.scss";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
    return(
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US</span>
                <div className="mail">
                    <input type="text" placeholder="Enter your e-mail..." />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                <GoogleIcon/>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                </div>
            </div>
        </div>
    )
}
export default Contact;