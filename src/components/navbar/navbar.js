import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss';
import logo from '../../assets/Logo.png'
import logo2 from '../../assets/Logo_with_text.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {

    logout() {
        window.localStorage.removeItem("seller");
        window.localStorage.removeItem("auth");
        window.location.replace('/');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src={logo2} alt=""/></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/store">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/management">Management</Link>
                        </li>
                    </ul>
                </div>
                    <div id="navstamp">
                    <img src={logo} alt="CC Logo"/>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0 searchbar">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        { window.localStorage.getItem('seller') == "true" &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        }
                        { window.localStorage.getItem('auth') === null &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        }
                        { window.localStorage.getItem('auth') === null &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Sign-up</Link>
                        </li>
                        }
                        { window.localStorage.getItem('auth') !== null &&
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.logout.bind(this)}>Logout</a>
                        </li>
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
