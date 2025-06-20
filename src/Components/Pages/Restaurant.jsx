import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import restaurantData from "../../../src/Data/Restaurant.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Restaurants = () => {
    const { cartItems, addToCart } = useContext(CartContext);

    const handleBookTable = (item) => {  // renamed to match button usage
        const alreadyInCart = cartItems.find(cartItem => cartItem.id === item.id);

        if (alreadyInCart) {
            toast.info("Item already in cart");
        } else {
            addToCart({ ...item, quantity: 1 });
            toast.success("Table added to cart!");
        }
    };
    return (
        <div className="main-wrapper">
            <ToastContainer />
            <div className="container">
                <div className="row">
                    {/* Sidebar Filters */}
                    <div className="col-lg-3 pb-3">
                        <div className="filter-sidebar shadow-sm">
                            <h5 className="fw-bold mb-4 d-flex align-items-center">
                                <i className="ri-filter-3-fill me-2 text-secondary"></i> Advanced Filters
                            </h5>

                            <fieldset className="filter-section">
                                <legend><i className="ri-map-pin-line me-2 "></i>Destination</legend>
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
                                <legend><i className="ri-calendar-event-line me-2 "></i>Date From</legend>
                                <input type="date" className="form-control" />
                            </fieldset>

                            <fieldset className="filter-section">
                                <legend><i className="ri-user-smile-line me-2 text-white"></i>Guests</legend>
                                <input type="number" className="form-control" placeholder="Number of Guests" min="1" />
                            </fieldset>

                            <fieldset className="filter-section ">
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

                    {/* Restaurant Cards */}
                    <div className="col-lg-9">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {restaurantData.map((item) => (
                                <div key={item.id} className="col-md-6 col-xl-4 mb-4">
                                    <div className="transport-card p-3 shadow-sm h-100 d-flex flex-column">
                                        <div className="position-relative mb-3">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="img-fluid rounded-3 w-100"
                                            />
                                            <span className="badge position-absolute top-0 end-0 m-2 bg-primary text-white">
                                                <i className="ri-star-fill me-1"></i>
                                                {item.rating} ({item.reviews})
                                            </span>
                                        </div>

                                        <h6 className="fw-bold mb-1 text-white">{item.title}</h6>
                                        <div className="text-white mb-2">
                                            <i className="ri-map-pin-line me-1"></i> {item.location}
                                        </div>

                                        <div className="d-flex flex-wrap gap-2 text-white mb-3 small">
                                            <span className="badge bg-dark">{item.tag}</span>
                                            <span>
                                                <s className="text-secondary">${item.oldPrice}</s>{" "}
                                                <strong className="text-success">${item.price}</strong>
                                            </span>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            <span className="fw-semibold text-primary">
                                                ${item.price} <small>/meal</small>
                                            </span>
                                            <button
                                                className="btn btn-outline-primary btn-sm btn-dark-theme"
                                                onClick={() => handleBookTable(item)}
                                            >
                                                Book Table
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;
