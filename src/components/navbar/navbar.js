import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss';
import logo from '../../assets/Logo.png'
import logo2 from '../../assets/Logo_with_text.png'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src={logo2} alt=""/></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Projects">Store</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/developers">Management</Link>
                        </li>
                    </ul>
                </div>
                    <div id="navstamp">
                    <img src={logo} alt="CC Logo"/>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/store">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0 searchbar">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
