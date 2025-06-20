import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import tourData from "../../../src/Data/Tours.json";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const { cartItems, addToCart } = useContext(CartContext);

    useEffect(() => {
        setTours(tourData);
    }, []);

    const handleBookNow = (tour) => {
        const alreadyInCart = cartItems.find(item => item.id === tour.id);
        if (alreadyInCart) {
            toast.error("Item already in cart");
        } else {
            addToCart({ ...tour, quantity: 1 });
            toast.success("Tour added to cart!");
        }
    };

    const loadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <div className="main-wrapper">
            <ToastContainer position="top-right" autoClose={2500} theme="dark" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        <div className="filter-sidebar shadow-sm">
                            <h5 className="fw-bold mb-4 d-flex align-items-center">
                                <i className="ri-filter-3-fill me-2 text-secondary"></i>
                                Advanced Filters
                            </h5>

                            <fieldset className="filter-section">
                                <legend><i className="ri-map-pin-line me-2"></i>Destination</legend>
                                <select className="form-select">
                                    <option value="">Select Destination</option>
                                    <option>USA</option>
                                    <option>Turkey</option>
                                    <option>Switzerland</option>
                                    <option>Bora Bora</option>
                                </select>
                            </fieldset>

                            <fieldset className="filter-section">
                                <legend><i className="ri-flight-takeoff-line me-2"></i>Tour Type</legend>
                                <select className="form-select">
                                    <option value="">Select Type</option>
                                    <option>Adventure</option>
                                    <option>Relaxation</option>
                                    <option>Cultural</option>
                                </select>
                            </fieldset>

                            <fieldset className="filter-section">
                                <legend><i className="ri-calendar-event-line me-2"></i>Date From</legend>
                                <input type="date" className="form-control" />
                            </fieldset>

                            <fieldset className="filter-section">
                                <legend><i className="ri-user-smile-line me-2"></i>Guests</legend>
                                <input type="number" className="form-control" placeholder="Number of Guests" min="1" />
                            </fieldset>

                            <fieldset className="filter-section">
                                <legend><i className="ri-star-smile-line me-2"></i>Traveler Rating</legend>
                                <div className="d-flex flex-wrap gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="rating-badge">
                                            <i className="ri-star-fill text-warning me-1"></i>{star}
                                        </span>
                                    ))}
                                </div>
                            </fieldset>

                            <fieldset className="filter-section">
                                <legend><i className="ri-price-tag-3-line me-2"></i>Special Offers</legend>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="likely" />
                                    <label className="form-check-label" htmlFor="likely">Likely to Sell Out</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="discount" />
                                    <label className="form-check-label" htmlFor="discount">Winter Discount</label>
                                </div>
                            </fieldset>

                            <fieldset className="filter-section">
                                <legend><i className="ri-translate-2 me-2"></i>Languages</legend>
                                {["English", "Spanish", "French", "Bangla"].map((lang, i) => (
                                    <div className="form-check" key={i}>
                                        <input className="form-check-input" type="checkbox" id={lang} />
                                        <label className="form-check-label" htmlFor={lang}>{lang}</label>
                                    </div>
                                ))}
                            </fieldset>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            {tours.slice(0, visibleCount).map((tour) => (
                                <div className="col-md-6 col-lg-4 mb-4" key={tour.id}>
                                    <div className="card h-100 tour-card shadow-sm position-relative">
                                        <div className="position-relative">
                                            <Link to={`/tour/${tour.id}`}>
                                                <img src={tour.image} className="card-img-top rounded-3" alt={tour.title} />
                                            </Link>
                                            <i
                                                className="ri-shopping-cart-2-line fs-5 text-white position-absolute top-0 end-0 m-2"
                                                role="button"
                                                onClick={() => handleBookNow(tour)}
                                            ></i>
                                        </div>
                                        <div className="card-body py-3">
                                            <h5 className="card-title fw-semibold mb-1">{tour.title}</h5>
                                            <p className="mb-3"><i className="ri-map-pin-line me-1"></i>{tour.location}</p>
                                            <div className="d-flex flex-wrap justify-content-between small mb-3 p-2 rounded-2" style={{ backgroundColor: "rgba(248,250,252,.08)" }}>
                                                <div className="me-3"><i className="ri-time-line me-1"></i>{tour.duration}</div>
                                                <div><i className="ri-user-line me-1"></i>{tour.persons}</div>
                                            </div>
                                            <div className="d-flex mt-2 align-items-center justify-content-between small">
                                                <div className="fs-5" style={{ color: "#8f94a3" }}>
                                                    From
                                                    <span className="text-white fw-bold"> ${tour.price}</span>
                                                </div>
                                                <div>
                                                    <i className="ri-star-fill text-warning me-1"></i>
                                                    <span>{tour.rating} ({tour.reviews})</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleCount < tours.length && (
                            <div className="text-center mt-4">
                                <button onClick={loadMore} className="btn btn-primary px-4 py-2">Load More</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tours;
