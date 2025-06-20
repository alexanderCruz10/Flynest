import React, { useEffect, useState } from "react";
import PaymentPage from "./PaymentPage";

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [checkInDate, setCheckInDate] = useState("2025-02-25");
    const [checkOutDate, setCheckOutDate] = useState("2025-02-28");
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const calculateTax = (subtotal) => subtotal * 0.05;
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal + calculateTax(subtotal);
    };

    const handleContinue = () => {
        const bookingInfo = {
            checkInDate,
            checkOutDate,
            subtotal: calculateSubtotal().toFixed(2),
            tax: calculateTax(calculateSubtotal()).toFixed(2),
            total: calculateTotal().toFixed(2),
        };
        localStorage.setItem("bookingStepData", JSON.stringify(bookingInfo));
        setShowCheckout(true);
    };

    if (showCheckout) return <PaymentPage />;

    return (
        <div className="checkout-wrapper bg-dark text-white py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-white">🧾 Confirm Your Booking</h2>
                    <p className="text-white">Home → Cart → Checkout</p>
                    <div className="d-flex justify-content-center gap-2 steps">
                        <span className="step completed">1</span>
                        <span className="step completed">2</span>
                        <span className="step current">3</span>
                        <span className="step">✓</span>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Form Section */}
                    <div className="col-lg-8">
                        <div className="p-4 rounded shadow bg-section-light">
                            <h5 className="text-warning mb-4">🔐 Personal Details</h5>
                            <div className="row g-3">
                                <div className="col-md-6"><input type="text" className="form-control dark-input" placeholder="Full Name" /></div>
                                <div className="col-md-6"><input type="email" className="form-control dark-input" placeholder="Email Address" /></div>
                                <div className="col-md-6"><input type="tel" className="form-control dark-input" placeholder="Phone Number" /></div>
                                <div className="col-md-6"><input type="tel" className="form-control dark-input" placeholder="Alternate Number" /></div>
                                <div className="col-md-6"><input type="text" className="form-control dark-input" placeholder="Country" /></div>
                                <div className="col-md-6"><input type="text" className="form-control dark-input" placeholder="City" /></div>
                                <div className="col-md-6"><input type="text" className="form-control dark-input" placeholder="State" /></div>
                                <div className="col-md-6"><input type="text" className="form-control dark-input" placeholder="Zip Code" /></div>
                                <div className="col-12"><textarea className="form-control dark-input" rows="3" placeholder="Additional Notes (Optional)" /></div>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="col-lg-4">
                        <div className="p-4 rounded shadow-sm bg-section-light">
                            <h5 className="text-white d-flex justify-content-between mb-4">
                                Booking Summary
                            </h5>

                            {/* Date Picker */}
                            <div className="mb-3">
                                <label className="form-label text-white">Check-In</label>
                                <div className="input-group">
                                    <i className="ri-calendar-line input-group-text bg-dark border-0 text-warning"></i>
                                    <input
                                        type="date"
                                        value={checkInDate}
                                        onChange={(e) => setCheckInDate(e.target.value)}
                                        className="form-control dark-input"
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-white">Check-Out</label>
                                <div className="input-group">
                                    <i className="ri-calendar-check-line input-group-text bg-dark border-0 text-warning"></i>
                                    <input
                                        type="date"
                                        value={checkOutDate}
                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                        className="form-control dark-input"
                                    />
                                </div>
                            </div>

                            {/* Destination */}
                            <p className="mt-3 text-light">
                                <i className="ri-map-pin-line text-warning me-2"></i>
                                Destination: Bangkok, Thailand
                            </p>

                            {/* Price Breakdown */}
                            <div className="p-3 bg-dark rounded mb-3 border border-secondary text-white">
                                <p>Sub Total <span className="float-end">${calculateSubtotal().toFixed(2)}</span></p>
                                <p>VAT (5%) <span className="float-end">${calculateTax(calculateSubtotal()).toFixed(2)}</span></p>
                                <hr className="border-secondary" />
                                <p className="fw-bold fs-5">
                                    Total <span className="float-end text-warning">${calculateTotal().toFixed(2)}</span>
                                </p>
                            </div>

                            {/* Continue Button */}
                            <button
                                type="button"
                                className="btn next-btn w-100 fw-bold"
                                onClick={handleContinue}
                            >
                                Continue & Next
                            </button>

                            {/* Note */}
                            <div className="text-white text-center small mt-3">
                                <i className="ri-checkbox-circle-line text-success me-1"></i>
                                Free Cancellation<br />
                                <small>Up to 24 hours in advance</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
