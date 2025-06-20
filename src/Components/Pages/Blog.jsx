import React from "react";
import vanimg from '../../assets/news-6.png'
import news1 from '../../assets/news-1.png';
import news2 from '../../assets/news-2.png';
import news3 from '../../assets/news-3.png';
import news4 from '../../assets/news-4.png';
import news5 from '../../assets/news-5.png';
import news6 from '../../assets/news-6.png';
import news7 from '../../assets/news-7.png';
import news8 from '../../assets/news-8.png';
import news9 from '../../assets/news-9.png';


const BlogSection = () => {
    return (
        <div className="blog-section main-wrapper text-white">
            <div className="container">

                <div className="row">
                    {/* Left main image */}
                    <div className="col-lg-6 mb-4">
                        <img src={vanimg} alt="Main Van" className="blog-section__main-img img-fluid rounded" />
                    </div>

                    {/* Right blog texts */}
                    <div className="col-lg-6">
                        <div className="blog-section__post mb-4">
                            <small className="blog-section__small-text">Tour Guide</small>
                            <h6 className="blog-section__card-title">
                                The World is a Book and Those Who do not Travel Read Only One Page.
                            </h6>
                            <div className="d-flex justify-content-between blog-section__meta small">
                                <span>Crish Jorden</span>
                                <span><i className="ri-time-line me-1"></i>10 Min Read</span>
                            </div>
                        </div>

                        <div className="blog-section__post mb-4">
                            <small className="blog-section__small-text">Tour Guide</small>
                            <h6 className="blog-section__card-title">
                                A Good Traveler Has no Fixed Plans and is Not Intent on Arriving.
                            </h6>
                            <div className="d-flex justify-content-between blog-section__meta small">
                                <span>David Warner</span>
                                <span><i className="ri-time-line me-1"></i>10 Min Read</span>
                            </div>
                        </div>

                        <div className="blog-section__post mb-4">
                            <small className="blog-section__small-text">Tour Guide</small>
                            <h6 className="blog-section__card-title">
                                We Travel, Some of us Forever, to Seek Other States, Other Lives, Other Souls.
                            </h6>
                            <div className="d-flex justify-content-between blog-section__meta small">
                                <span>David Malan</span>
                                <span><i className="ri-time-line me-1"></i>10 Min Read</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom cards - 6 static cards */}
                <div className="row pt-4">
                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news1} alt="Travel Post 1" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Travel</small>
                                <h6 className="blog-section__card-title">
                                    Exploring the Mountains: A Journey into the Wild
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Sarah Lee</span>
                                    <span><i className="ri-time-line me-1"></i>8 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news2} alt="Travel Post 2" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Culture</small>
                                <h6 className="blog-section__card-title">
                                    Immersing in Local Traditions: The Heart of the City
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Michael Smith</span>
                                    <span><i className="ri-time-line me-1"></i>6 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news3} alt="Travel Post 3" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Adventure</small>
                                <h6 className="blog-section__card-title">
                                    Sailing the Seven Seas: Epic Tales from the Ocean
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Anna Wright</span>
                                    <span><i className="ri-time-line me-1"></i>9 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news4} alt="Travel Post 4" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Nature</small>
                                <h6 className="blog-section__card-title">
                                    Discovering Hidden Waterfalls: A Photographer’s Paradise
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Jason Lee</span>
                                    <span><i className="ri-time-line me-1"></i>7 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news5} alt="Travel Post 5" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Lifestyle</small>
                                <h6 className="blog-section__card-title">
                                    Minimalist Travel: How to Pack Light and Smart
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Emma Davis</span>
                                    <span><i className="ri-time-line me-1"></i>5 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news6} alt="Travel Post 6" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Exploration</small>
                                <h6 className="blog-section__card-title">
                                    The Art of Slow Travel: Embracing the Journey
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Oliver Brown</span>
                                    <span><i className="ri-time-line me-1"></i>12 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news7} alt="Travel Post 4" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Culture</small>
                                <h6 className="blog-section__card-title">
                                    Wandering Through Time: Discovering Hidden Cultural Gems
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Lucas Reed</span>
                                    <span><i className="ri-time-line me-1"></i>7 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news8} alt="Travel Post 5" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Nature</small>
                                <h6 className="blog-section__card-title">
                                    Into the Wilderness: Embracing Earth’s Untamed Beauty
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Grace Palmer</span>
                                    <span><i className="ri-time-line me-1"></i>8 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="blog-section__card rounded overflow-hidden">
                            <img src={news9} alt="Travel Post 6" className="img-fluid" />
                            <div className="p-3">
                                <small className="blog-section__small-text">Exploration</small>
                                <h6 className="blog-section__card-title">
                                    Beyond the Horizon: Stories of Bold Expeditions
                                </h6>
                                <div className="d-flex justify-content-between blog-section__meta small">
                                    <span><i className="ri-user-line me-1"></i>Oliver Chase</span>
                                    <span><i className="ri-time-line me-1"></i>11 Min Read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogSection;
