import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// import { useParams } from 'react-router-dom';
import tourData from '../../../src/Data/Tours.json';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import 'swiper/css';

import img1 from './../../../public/Images/image14.png';
import img2 from './../../../public/Images/image10.jpeg';
import img3 from './../../../public/Images/image8.jpeg';
import img4 from './../../../public/Images/image3.png';


const TourDetailPage = () => {

    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const addToCart = (tour) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const alreadyAdded = cart.find((item) => item.id === tour.id);
        if (!alreadyAdded) {
            cart.push(tour);
            localStorage.setItem("cart", JSON.stringify(cart));

            toast.success("Tour added to cart!", {
                position: "top-right",
                autoClose: 1500,
                onClose: () => navigate("/cart") // Navigate after toast closes
            });
        } else {
            toast.info("This tour is already in your cart.", {
                position: "top-right",
                autoClose: 2000
            });
        }
    };
    



    const { id } = useParams(); // Get tour ID from the route

    // Find tour by ID from the JSON
    const tour = tourData.find((t) => String(t.id) === id);

    // Fallback in case tour is not found
    const fallbackTour = {
        title: "Dusitd2 Samyan Bangkok",
        location: "Bangkok, Thailand",
        duration: "3 Days 2 Night",
        persons: "2 Person",
        price: 113,
        rating: 4.7,
        reviews: 20,
        image: "/Images/image1.jpeg",
    };

    const selectedTour = tour || fallbackTour;

    return (
        <>
            {/* Slider Section */}
            <ToastContainer />
            <div className="tour-detail-page">
                <div className="tour-slider">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1.8}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="tourSwiper"
                    >
                        <SwiperSlide>
                            <img src={img1} alt="Slide 1" className="tour-slide-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="Slide 2" className="tour-slide-img active-slide" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="Slide 3" className="tour-slide-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt="Slide 2" className="tour-slide-img active-slide" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Tour Details Section */} 
            <div className="about-detail-section pt-5">
                <div className="container">
                    <div className="row">
                        {/* Left Column - Tour Description */}
                        <div className="col-md-8">
                            <h4 className="tour-title mb-3">{tour.title}</h4>

                            <div className="d-flex gap-3 align-items-center mb-3 ">
                                <span><i className="ri-map-pin-line"></i> {tour.location}</span>
                                <span><i className="ri-calendar-2-line"></i> {tour.duration}</span>
                                <span><i className="ri-user-3-line"></i> {tour.persons}</span>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <strong>From <span className="fs-2">${tour.price}</span></strong>
                                </div>
                                <div className="text-warning">
                                    <i className="ri-star-fill"></i> {tour.rating} ({tour.reviews} reviews)
                                </div>
                            </div>

                            {/* About Section */}
                            <section className="mb-4">
                                <h5 className="mb-2">About</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            </section>

                            {/* Included & Excluded */}
                            <div className="row border rounded p-2">
                                <div className="col-md-6">
                                    <h5 className="mb-2">Included</h5>
                                    <ul className="list-unstyle-detail">
                                        <li> Welcome Breakfast</li>
                                        <li> All Entry Tickets</li>
                                        <li> Lunch & Dinner</li>
                                        <li> Evening Snacks</li>
                                        <li> First Aid</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="mb-2">Exclude</h5>
                                    <ul className="list-unstyle-detail">
                                        <li> Personal Expenses</li>
                                        <li> Unmentioned activities</li>
                                        <li> Additional Service</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Tour Plan */}
                            <section className="mt-4 ">
                                <h5 className="mb-3">Tour Plan</h5>
                                <div className="accordion" id="tourPlanAccordion">
                                    {["Day 1", "Day 2", "Day 3"].map((day, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className={`accordion-button ${index > 0 ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded={index === 0}
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    {day} – {tour.location}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading${index}`}
                                                data-bs-parent="#tourPlanAccordion"
                                            >
                                                <div className="accordion-body bg-dark text-white">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                    <ul className="list-unstyle-detail">
                                                        <li> Personal Expenses</li>
                                                        <li> Unmentioned activities</li>
                                                        <li> Additional Service</li>
                                                    </ul>

                                                    {day}.
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Policy Section */}
                            <section className="mt-4">
                                <h5 className="mb-2">Policy</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

                                <ol className="list-numbered">
                                    <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</li>
                                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                                </ol>

                            </section>
                        </div>

                       

                        <div className="col-md-4">
                            <div className="p-4 rounded-4 shadow-lg booking-widget bg-dark text-white">
                                <h6 className="text-muted mb-2">From</h6>
                                <h3 className="fw-bold text-light mb-4">
                                    <span className="text-secondary">${tour.price}</span>
                                </h3>

                                <form>
                                    <div className="mb-3">
                                        <label className=" text-light p-2">Select Date</label>
                                        <input type="date" className="form-control bg-dark border-secondary text-white" />
                                    </div>

                                    <div className="mb-3">
                                        <label className=" text-light p-2 ">Guests</label>
                                        <select className="form-select bg-dark border-secondary text-white">
                                            <option>1 Guest</option>
                                            <option>2 Guests</option>
                                            <option>3 Guests</option>
                                        </select>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-secondary w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
                                        onClick={() => addToCart(selectedTour)}
                                    >
                                        <i className="ri-shopping-cart-line fs-5"></i>
                                        <span>Book Now</span>
                                    </button>
                                </form>

                                <div className="small mt-4 text-muted border-top pt-3">
                                    <i className="ri-check-double-line text-success me-2"></i>
                                    Free Cancellation – Up to 24h in advance
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TourDetailPage;
