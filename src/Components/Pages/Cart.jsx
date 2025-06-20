import React, { useState, useContext } from "react";
import CheckoutPage from "./ConfirmYourBooking";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);
    const [bookingDate, setBookingDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    // Increase quantity by calling addToCart with updated quantity
    const increaseQty = (id) => {
        const item = cartItems.find((i) => i.id === id);
        if (item) {
            addToCart({ ...item, quantity: (item.quantity || 1) + 1 });
        }
    };

    // Decrease quantity or remove from cart if quantity reaches 1 and user decreases
    const decreaseQty = (id) => {
        const item = cartItems.find((i) => i.id === id);
        if (item) {
            if ((item.quantity || 1) > 1) {
                addToCart({ ...item, quantity: item.quantity - 1 });
            } else {
                removeFromCart(id);
            }
        }
    };

    // Calculate totals
    const subtotal = cartItems.reduce(
        (sum, item) => sum + (parseFloat(item.price) || 0) * (item.quantity || 1),
        0
    );
    const vat = subtotal * 0.05;
    const grandTotal = subtotal + vat;

    if (showCheckout)
        return <CheckoutPage cartItems={cartItems} bookingDate={bookingDate} />;

    return (
        <div className="cartpage-wrapper">
            <div className="container cartpage-container">
                <div className="cartpage-header my-4">
                    <h2 className="cartpage-title">🧳 Tour Cart Summary</h2>
                    <p className="cartpage-breadcrumb">Home → Your Cart</p>
                    <div className="cartpage-steps d-flex justify-content-center gap-2">
                        <span className="step step-active">1</span>
                        <span className="step">2</span>
                        <span className="step">3</span>
                        <span className="step">✓</span>
                    </div>
                </div>

                <div className="row cartpage-content">
                    {/* ───────────────  CART ITEMS  ────────────── */}
                    <div className="col-md-8 cartpage-cart">
                        <h4>Your Cart Details</h4>

                        {cartItems.length === 0 ? (
                            /* empty state */
                            <div className="cart-empty text-center p-4 bg-dark text-light rounded">
                                <i className="ri-shopping-cart-2-line fs-1"></i>
                                <h5>Your cart is currently empty</h5>
                                <p>Looks like you haven’t added any bookings yet.</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a href="/hotels" className="btn btn-outline-warning">
                                        Browse Hotels
                                    </a>
                                    <a href="/transport" className="btn btn-outline-primary">
                                        Book Transport
                                    </a>
                                    <a href="/restaurants" className="btn btn-outline-success">
                                        Find Restaurants
                                    </a>
                                </div>
                            </div>
                        ) : (
                            /* items table */
                            <div className="table-responsive">
                                <table className="table table-dark table-hover cart-table">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Package</th>
                                            <th>Package Qty</th>
                                            <th>Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                {/* Package */}
                                                <td className="d-flex align-items-center gap-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        width="80"
                                                        className="rounded"
                                                        onError={(e) =>
                                                            (e.target.src = "/default-hotel.jpg")
                                                        }
                                                    />
                                                    <div>
                                                        <strong>{item.title}</strong>
                                                        <br />
                                                        <small>
                                                            {item.persons} person
                                                            {item.persons > 1 ? "s" : ""}
                                                        </small>
                                                        <br />
                                                        <small className="text-capitalize">{item.type}</small>
                                                    </div>
                                                </td>

                                                {/* Qty with +/- */}
                                                <td>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <button
                                                            className="btn btn-sm btn-light"
                                                            onClick={() => decreaseQty(item.id)}
                                                        >
                                                            –
                                                        </button>
                                                        <span>{item.quantity || 1}</span>
                                                        <button
                                                            className="btn btn-sm btn-light"
                                                            onClick={() => increaseQty(item.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>

                                                {/* Price */}
                                                <td>
                                                    $
                                                    {(
                                                        (parseFloat(item.price) || 0) * (item.quantity || 1)
                                                    ).toFixed(2)}
                                                </td>

                                                {/* Remove */}
                                                <td>
                                                    <i
                                                        className="ri-delete-bin-line text-danger fs-5"
                                                        role="button"
                                                        title="Remove item"
                                                        onClick={() => removeFromCart(item.id)}
                                                    ></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* ───────────────  SUMMARY  ────────────── */}
                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className="p-3 bg-dark text-light rounded">
                            <h5>
                                Total{" "}
                                <span className="float-end text-success">${subtotal.toFixed(2)}</span>
                            </h5>

                            <p className="fw-bold mt-3">Select Travel Date</p>
                            <input
                                type="date"
                                value={bookingDate}
                                onChange={(e) => setBookingDate(e.target.value)}
                                min={bookingDate}
                                className="form-control mb-3"
                            />

                            <p>
                                <i className="ri-map-pin-line me-2 text-warning"></i> Destination Selected
                            </p>

                            <div className="border-top pt-2 mt-2">
                                <p>
                                    Sub Total
                                    <span className="float-end">${subtotal.toFixed(2)}</span>
                                </p>
                                <p>
                                    VAT (5%)
                                    <span className="float-end">${vat.toFixed(2)}</span>
                                </p>
                                <hr />
                                <h6>
                                    Grand Total
                                    <span className="float-end text-warning">${grandTotal.toFixed(2)}</span>
                                </h6>
                            </div>

                            <button
                                className="btn next-btn w-100 fw-bold mt-3"
                                disabled={cartItems.length === 0}
                                onClick={() => setShowCheckout(true)}
                            >
                                Continue & Next
                            </button>

                            <div className="mt-3 small">
                                <i className="ri-checkbox-circle-line text-success me-1"></i>
                                Free cancellation up to 24 h in advance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
