import React from 'react'


import aboutbanner from '../../assets/about-banner-three.png'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import brand1 from '../../assets/brand-1.jpeg'
import brand2 from '../../assets/brand-2.jpeg'
import brand3 from '../../assets/brand-3.jpeg'
import brand4 from '../../assets/brand-4.png'
import brand5 from '../../assets/brand-5.png'


import tst from '../../assets/testimonial-1.jpeg'
import tstbanner from '../../assets/testimonial-banner.png'



function About() {
    return (
        <>
            <div className="about-section section">
                <div className="container about">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <div className="row">
                                    <p>Special Offers</p>
                                    <h2>Get The Best Travel  Experience With Flynest</h2>
                                </div>
                            </div>
                            <p className="about-para">Travel is a transformative and enriching experience that allows individuals to explore new destinations, cultures, and landscapes. It is a fundamental human activity that has been practiced for centuries and continues to be a source of joy, learning, and personal growth.</p>
                            <p className="about-para">Travel is a transformative and enriching experience that allows individuals to explore new destinations, cultures...</p>
                            <button className="btn">Learn More <i className="ri-arrow-right-up-line"></i></button>
                            <div className="user-icon d-flex align-items-center gap-3 mt-4">
                                <i class="ri-user-line"></i>
                                <p className='about-para m-0'>2,500 People Booked Tomorrow Land Event in the Last 24 hours</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-xl-0 mt-5">
                            <div className="about-img">
                                <img src={aboutbanner} alt="Travel Group" className="img-fluid rounded-4" />
                            </div>
                            <div className="row stats-box mt-5 text-center">
                                <div className="col-md-4 mb-3">
                                    <h4>150k</h4>
                                    <span>Happy Traveler</span>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h4>95.7%</h4>
                                    <span>Satisfaction Rate</span>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h4>5000+</h4>
                                    <span>Tour Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="price-section section">
                <div className="container">
                    <div className="section-title mb-5">
                        <div className="row text-center">
                            <p>Package Pricing Plan</p>
                            <h2>Simply Choose The Pricing Plan <br /> That Fits You Best</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="pricing-card">
                                <h5>Basic</h5>
                                <p className="mb-3">Best for personal and basic needs</p>
                                <div className="pricing-content d-flex align-items-center gap-3 border-top">
                                    <h2>$10</h2>
                                    <span>One-time payment</span>
                                </div>
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-4"> <i className="ri-check-line"></i> 20+ Partners</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Mass Messaging</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Lorem ipsum dolor sit amet</li>
                                    <li className="mb-4 disabled-li"> <i className="ri-check-line"></i> Lorem ipsum dolor</li>
                                    <li className="mb-4 disabled-li"> <i className="ri-check-line"></i> Online booking engine</li>
                                    <li className="mb-4 disabled-li"> <i className="ri-check-line"></i> Business Card Scanner</li>
                                </ul>
                                <button className="btn text-white">Try Now <i className="ri-arrow-right-up-line"></i></button>
                                <p class="text-white mt-3">Per month +2% per online Booking</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-card">
                                <h5>Pro <span className="popular-tag text-white">popular</span></h5>
                                <p className="mb-3">Best for personal and basic needs</p>
                                <div className="pricing-content d-flex align-items-center gap-3 border-top">
                                    <h2>$77</h2>
                                    <span>One-time payment</span>
                                </div>
                                <ul className="list-unstyled my-4">
                                    <li className="mb-4"> <i className="ri-check-line"></i> 20+ Partners</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Mass Messaging</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Lorem ipsum dolor sit amet</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Lorem ipsum dolor</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Online booking engine</li>
                                    <li className="mb-4 disabled-li"> <i className="ri-check-line"></i> Business Card Scanner</li>
                                </ul>
                                <button className="btn">Try Now <i className="ri-arrow-right-up-line"></i></button>
                                <p class="text-white mt-3">Per month +1.9% per online Booking</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-card">
                                <h5>Custom</h5>
                                <p className="mb-3">Best for personal and basic needs</p>
                                <ul className="list-unstyled my-4">
                                    <li className="mb-4"> <i className="ri-check-line"></i> Mass Messaging</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Lorem ipsum dolor sit amet</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Unlimited Everything</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Lorem ipsum dolor</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Lorem ipsum dolor</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Lorem ipsum dolor</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Online booking engine</li>
                                    <li className="mb-4"> <i className="ri-check-line"></i> Business Card Scanner</li>
                                </ul>
                                <button className="btn">Contact <i className="ri-arrow-right-up-line"></i></button>
                                <p class="text-white mt-3">Please contact anytime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brands-container section">
                <div className="container">
                    <div className="row">
                        <Swiper
                            className="brand-swiper"
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            autoplay={true}
                            centeredSlides={true}
                        >
                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand1} alt="brand-image" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand2} alt="brand-image" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand3} alt="brand-image" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand4} alt="brand-image" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand5} alt="brand-image" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand3} alt="brand-image" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image">
                                    <img src={brand4} alt="brand-image" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="testimonials-container section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title">
                            <p>Testimonial</p>
                            <h2>What People Have Said<br /> About Our Service</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Swiper
                                className="tst-swiper"
                                loop={true}
                            >
                                <SwiperSlide>
                                    <div className="tst-item">
                                        <div className="tst-user d-flex align-items-center gap-2">
                                            <img src={tst} alt="testimonials-image" width={50} height={50} className='img-fluid rounded-circle border border-white' />
                                            <p className='mb-0 fw-bold text-white fs-6'>David Malan<span className='fw-normal'>Traveler</span> </p>
                                        </div>
                                        <div class="tst-rattings mt-3 mb-4">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                        </div>
                                        <p className='fw-bold fs-5 mb-4'>
                                            Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                                            adipiscing. Donec tincidunt dui vel adipiscing sit
                                            turpis neque at cursus. Dignissim scelerisque mattis
                                            ultricies vitae.
                                        </p>
                                        <div className="tst-footer d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-white text-decoration-none fw-semibold text-uppercase fs-4 m-0">
                                                Fly<span style={{ color: "rgb(242, 111, 85)" }}>n</span>est
                                            </a>
                                            <p className='mb-0'>Jan 20, 2025</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tst-item">
                                        <div className="tst-user d-flex align-items-center gap-2">
                                            <img src={tst} alt="testimonials-image" width={50} height={50} className='img-fluid rounded-circle border border-white' />
                                            <p className='mb-0 fw-bold text-white fs-6'>David Malan<span className='fw-normal'>Traveler</span> </p>
                                        </div>
                                        <div class="tst-rattings mt-3 mb-4">
                                            <i class="ri-star-fill"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                            <i class="ri-star-fill ps-1"></i>
                                        </div>
                                        <p className='fw-bold fs-5 mb-4'>
                                            Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                                            adipiscing. Donec tincidunt dui vel adipiscing sit
                                            turpis neque at cursus. Dignissim scelerisque mattis
                                            ultricies vitae.
                                        </p>
                                        <div className="tst-footer d-flex align-items-center justify-content-between">
                                            <a href="#" className="text-white text-decoration-none fw-semibold text-uppercase fs-4 m-0">
                                                Fly<span style={{ color: "rgb(242, 111, 85)" }}>n</span>est
                                            </a>
                                            <p className='mb-0'>Jan 20, 2025</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="col-md-6">
                            <div className="tst-banner rounded-5 overflow-hidden position-relative">
                                <img src={tstbanner} alt="testimonials-banner" className='img-fluid' />
                                <span class="bi bi-play-fill"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="banner-container section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="section-title">
                            <p>special offers</p>
                            <h2>Winter Our Big Offers to Inspire You</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="banner-content z-1 py-5 px-4 rounded-3 banner-bg-1 text-white">
                                <p className='highlight-text'>Save up to</p>
                                <h4 className='fs-1 fw-semibold'>50%</h4>
                                <p className='pera fs-4 fw-bold'>Let’s Explore The World</p>
                                <div className="location d-flex align-items-center gap-2">
                                    <i class="bi bi-geo-alt"></i>
                                    <p className='name mb-0'>Bangkok, Thailand</p>
                                </div>
                                <button className='btn banner-btn px-4'>Booking Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="banner-content z-1 py-5 px-4 rounded-3 banner-bg-1 text-white">
                                <h4 className='fs-1 fw-semibold'>Nearby Hotel</h4>
                                <p class="pera">
                                    Up to <span class="highlights-text">50%</span> Off
                                </p>
                                <div className="location d-flex align-items-center gap-2">
                                    <i class="bi bi-geo-alt"></i>
                                    <p className='name mb-0'>Bangkok, Thailand</p>
                                </div>
                                <button className='btn banner-btn px-4'>Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
