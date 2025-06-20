import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartContext } from "../../context/CartContext";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItems } = useContext(CartContext);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            setCartCount(total);
        };

        updateCount();
        window.addEventListener('cartUpdated', updateCount);
        window.addEventListener('storage', updateCount);

        return () => {
            window.removeEventListener('cartUpdated', updateCount);
            window.removeEventListener('storage', updateCount);
        };
    }, []);


    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="text-white p-0 navbar navbar-expand-lg flex-column" style={{ backgroundColor: "#12151E" }}>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row w-100 py-3" style={{ borderBottom: "1px solid rgba(248, 250, 252, .08)" }}>
                    <div className="col-lg-12">
                        <div className="w-100 top-header d-flex align-items-center justify-content-between">
                            <div className="call d-none d-lg-flex align-items-center">
                                <span className="bi bi-telephone me-3" style={{ backgroundColor: "#222839" }}></span>
                                <div className="call-text">
                                    <p className="m-0">Call Anytime</p>
                                    <h4 className="fs-6 m-0 fw-semibold">+1 (416)-123-4567</h4>
                                </div>
                            </div>

                            <div className="logo">
                                <h1 className="p-0 m-0 text-uppercase fw-semibold">
                                    <Link to="/" className="text-white text-decoration-none navbar-brand fs-2 m-0">
                                        Fly<span style={{ color: "#f26f55" }}>n</span>est
                                    </Link>
                                </h1>
                            </div>

                            <div className="top-header-right d-none d-lg-flex align-items-center gap-4">
                                <div className="lang d-flex align-items-center gap-2 fs-6">
                                    <span className="ri-global-line"></span>
                                    <p className="m-0">English</p>
                                </div>
                                <div className="divider gradient-divider"></div>

                                <Link to="/cart" className="cartpage-cart-link position-relative">
                                    <i className="bi bi-cart text-white fs-5"></i>
                                    <span className="cart-count">
                                        {cartItems.length}
                                    </span>
                                </Link>
                                <button className="btn sign-up btn-custome text-white rounded-5 px-4 py-2 fs-6 fw-semibold">Sign Up</button>
                            </div>

                            <button
                                className="navbar-toggler nav-toggle d-block d-lg-none box-shadow-none"
                                type="button"
                                onClick={toggleMenu}
                                aria-label="Toggle navigation"
                            >
                                <span className="bi bi-list fs-1 text-white"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row py-0 py-lg-4 w-100 d-flex align-items-center">
                    <div className="col-lg-9">
                        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navtoggle">
                            <ul className="nav-menu list-unstyled m-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 gap-xl-5 gap-lg-4">
                                <li className="nav-items position-relative">
                                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                                </li>
                                <li className="nav-items position-relative">
                                    <Link to="/tours" className="nav-link" onClick={closeMenu}>Tours</Link>
                                </li>
                                <li className="nav-items position-relative">
                                    <Link to="/hotels" className="nav-link" onClick={closeMenu}>Hotels</Link>
                                </li>
                                <li className="nav-items position-relative">
                                    <Link to="/transport" className="nav-link" onClick={closeMenu}>Transports</Link>
                                </li>
                                <li className="nav-items position-relative">
                                    <Link to="/Restaurants" className="nav-link" onClick={closeMenu}>Restaurants</Link>
                                </li>
                                <li className="nav-items position-relative">
                                    <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
                                </li>
                                <li className="nav-items position-relative">
                                    <Link to="/blog" className="nav-link" onClick={closeMenu}>News</Link>
                                </li>
                                <li className="nav-items position-relative">
                                    <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="nav-input-box w-100 d-none d-lg-flex align-items-center justify-content-start gap-2">
                            <i className="bi bi-search"></i>
                            <input type="text" className="form-control form-control-sm w-100" placeholder="Destination, Attraction" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
