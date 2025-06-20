import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
    const navigate = useNavigate();
    const [booking, setBooking] = useState({
        date: "",
        location: "Selected Destination",
        adults: 2,
        children: 0,
        tourGuide: 170.15,
        dinner: 100.15,
        tax: 0,
        subTotal: 0,
        total: 0,
        transportTitle: "",
        transportCost: 0,
        restaurantTitle: "",
        restaurantCost: 0,
        hotelTitle: "",
        hotelCost: 0,
    });

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("bookingStepData"));
        if (stored) {
            const dinner = 100.15;
            const tourGuide = 170.15;
            const transportCost = parseFloat(stored.transportCost || 0);
            const restaurantCost = parseFloat(stored.restaurantCost || 0);
            const hotelCost = parseFloat(stored.hotelCost || 0);
            const subTotal = parseFloat(stored.subtotal || 0);
            const tax = parseFloat(stored.vat || 0);

            const total =
                subTotal +
                tax +
                dinner +
                tourGuide +
                transportCost +
                restaurantCost +
                hotelCost;

            setBooking(prev => ({
                ...prev,
                date: stored.checkInDate || new Date().toISOString().split("T")[0],
                subTotal,
                tax,
                tourGuide,
                dinner,
                transportTitle: stored.transportTitle || "",
                transportCost,
                restaurantTitle: stored.restaurantTitle || "",
                restaurantCost,
                hotelTitle: stored.hotelTitle || "",
                hotelCost,
                total,
            }));
        }
    }, []);

    const {
        date,
        location,
        adults,
        children,
        tourGuide,
        dinner,
        tax,
        subTotal,
        total,
        transportTitle,
        transportCost,
        restaurantTitle,
        restaurantCost,
        hotelTitle,
        hotelCost,
    } = booking;

    const handleBooking = () => {
        navigate("/Tour_Booking_Summery", {
            state: {
                date,
                location,
                adults,
                children,
                tourGuide,
                dinner,
                tax,
                subTotal,
                total,
                transportTitle,
                transportCost,
                restaurantTitle,
                restaurantCost,
                hotelTitle,
                hotelCost,
            },
        });
    };

    return (
        <div className="payment-wrapper bg-dark text-white py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="highlight-text">Place Your Order</h2>
                    <p className="text-muted">Home → Tour Cart Page</p>
                    <div className="d-flex justify-content-center gap-2 steps">
                        <span className="step completed">1</span>
                        <span className="step completed">2</span>
                        <span className="step completed">3</span>
                        <span className="step current">✓</span>
                    </div>
                </div>

                <div className="row">
                    {/* LEFT: Payment Form */}
                    <div className="col-md-8">
                        <h5 className="highlight-text mb-3">Cart Payment</h5>

                        <div className="form-group mb-3">
                            <label>Name On Card</label>
                            <input className="form-control dark-input" placeholder="Mr. Alexa" />
                        </div>
                        <div className="form-group mb-3">
                            <label>Card Number</label>
                            <input className="form-control dark-input" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Expiration Date</label>
                                <input className="form-control dark-input" placeholder="MM/YY" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>CCV</label>
                                <input className="form-control dark-input" placeholder="123" />
                            </div>
                        </div>

                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="agreeCard" />
                            <label className="form-check-label" htmlFor="agreeCard">
                                I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <button className="btn btn-primary mb-4" onClick={handleBooking}>
                            Payment Now
                        </button>

                        <h5 className="highlight-text mb-3">Online Payment</h5>
                        <div className="d-flex flex-wrap gap-3 mb-3">
                            <img src="/images/paypal.png" alt="PayPal" height="30" />
                            <img src="/images/stripe.png" alt="Stripe" height="30" />
                            <img src="/images/mastercard.png" alt="Mastercard" height="30" />
                            <img src="/images/visa.png" alt="Visa" height="30" />
                        </div>

                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="agreeOnline" />
                            <label className="form-check-label" htmlFor="agreeOnline">
                                I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <button className="btn btn-primary" onClick={handleBooking}>
                            Payment Now
                        </button>
                    </div>

                    {/* RIGHT: Summary Box */}
                    <div className="col-md-4 mt-5 mt-md-0">
                        <div className="p-4 rounded bg-section-light text-white border">
                            <h4 className="d-flex justify-content-between">
                                <span>Total</span> <span>${total.toFixed(2)}</span>
                            </h4>

                            <div className="mt-3">
                                <p className="text-white mb-1">Travel Date</p>
                                <div className="bg-dark p-2 rounded d-flex align-items-center">
                                    <i className="ri-calendar-line text-warning me-2"></i>
                                    <span>{date}</span>
                                </div>
                            </div>

                            <div className="text-light mt-3">
                                <p>
                                    <i className="ri-map-pin-line text-warning me-2"></i>
                                    {location}
                                </p>
                            </div>

                            <div className="bg-dark rounded p-3">
                                <p>Sub Total <span className="float-end">${subTotal.toFixed(2)}</span></p>
                                <p>VAT Tax <span className="float-end">${tax.toFixed(2)}</span></p>
                                <p>Adults <span className="float-end">{adults}</span></p>
                                <p>Children <span className="float-end">{children}</span></p>
                                <p>Tour Guide <span className="float-end">${tourGuide.toFixed(2)}</span></p>
                                <p>Dinner <span className="float-end">${dinner.toFixed(2)}</span></p>
                                {transportTitle && (
                                    <p>{transportTitle} <span className="float-end">${transportCost.toFixed(2)}</span></p>
                                )}
                                {restaurantTitle && (
                                    <p>{restaurantTitle} <span className="float-end">${restaurantCost.toFixed(2)}</span></p>
                                )}
                                {hotelTitle && (
                                    <p>{hotelTitle} <span className="float-end">${hotelCost.toFixed(2)}</span></p>
                                )}
                                <hr />
                                <p className="fw-bold">Total <span className="float-end text-highlight">${total.toFixed(2)}</span></p>
                            </div>

                            <button className="btn btn-book w-100 mt-3 text-white btn-custome" onClick={handleBooking}>
                                Book Now
                            </button>

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

export default PaymentPage;
