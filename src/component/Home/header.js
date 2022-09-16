import React,{Component}from 'react';
import './Header.css';

class Header extends Component {
    render() {
        const Search = () => {}
        return (
            <section id="header">
            <div>
                <a classNameName="logo">LOGO</a>
            </div>
            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><input onChange={Search()} type="text" placeholder="Search"></input></li>
                    <li><button><i className="fa fa-search"></i></button></li>
                    <li id="bag"><a href="cart.html"><i className="fa-solid fa-bag-shopping"></i></a></li>
                    <a href="#" id="close"><i className="fas fa-times"></i></a>
                </ul>
            </div>
            <div id="mobile">
                <a href="cart.html"><i className="fa-solid fa-bag-shopping"></i></a>
                <i id="bar" className="fa fa-bars"></i>
            </div>
        </section>
        )
    }
}

export default Header;