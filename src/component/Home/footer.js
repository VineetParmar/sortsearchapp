import React,{Fragment} from 'react';
import './footer.css';


const Footer = (props) => {
    return (
        <div>
        <div id="footer" className="section-p1">
        <div className="col">
            <a href="#model" alt="" className="logo2"></a>
            <h4>Contact</h4>
            <p><strong>Address:</strong>460 Tower Andheri,Bombay Street,Mumbai-400001.</p>
            <p><strong>Phone:</strong> (+91) 04 2223 985 / 84 9933 7765</p>
            <p><strong>Visting Hours:</strong> 10:00 - 19:00,Mon-Fri </p>
            <div className="social">
                <h4>Follow Us</h4>
                <div className="socialicon">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="about">
            <h4>About Us</h4>
            <a href="#">About us</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Blog</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Corporate Information</a>
        </div>
        <div className="about">
            <h4>Useful Links</h4>
            <a href="#">Contact Us</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Gift Cards</a>
        </div>
        <div className="col install">
            <h4>EXPERIENCE APP ON MOBILE</h4>
            <p>From App Store or Google Play</p>
            <div className="app">
                <p>Apps</p>
            </div>
            <p>Secured Payment Gateways</p>
        </div>
    </div>
        <hr/>
    <footer>
    <div className="copyr">&copy; 2022, Vineet Parmar - Full Stack Developer</div>
   </footer>
    </div>
    
    )
}

export default Footer