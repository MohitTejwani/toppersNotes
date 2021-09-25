import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Product = ({ isEnglish, setIsEnglish }) => {
    return (
        <div className="product">
            <div className="row">
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-2 product-images">
                            <img src="/img/ias.jpg" alt="Book" />
                            <img src="/img/ias.jpg" alt="Book" />
                            <img src="/img/ias.jpg" alt="Book" />
                        </div>
                        <div className="col-lg-10 image-preview">
                            <img src="/img/ias.jpg" className="img-fluid" alt="Book" />
                        </div>
                        <div className="col-lg-10 mobile-images">
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                // autoplay
                                // margin={20}
                                items="1"
                                nav={false}
                                dots={true}
                                responsiveClass={true}>
                                <img src="/img/ias.jpg" className="img-fluid" alt="Book" />
                                <img src="/img/ias.jpg" className="img-fluid" alt="Book" />
                                <img src="/img/ias.jpg" className="img-fluid" alt="Book" />
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h3 className="custom-breadcrumb">
                        Home &nbsp; &gt; &nbsp; IAS Study Material &nbsp; &gt; &nbsp; IAS Toppers Samanya….
                    </h3>
                    <h1 className="title">{isEnglish ? 'IAS Toppers Samanya Adhyayan Notes - Hindi Medium (Pre & Mains)' :
                        'IAS टॉपर्स सामान्य अध्ययन नोट्स - हिंदी माध्यम (प्री एंड मेन्स)'}</h1>
                    <p className="quantity">11 BOOKS</p>
                    <p className="rating"><span>4.9 &#11088;</span>20,592 Ratings & 2,006 Reviews</p>
                    <p className="extra">Extra ₹3000 off</p>
                    <div className="price">
                        <span>₹13,999</span> <span><strike>&nbsp;₹16,999&nbsp;</strike></span> <span>17% Off</span>
                    </div>
                    <div className="deadline">
                        <p>🏷️Hurry up! Sale Price Ends Tonight!🏷️</p>
                        <div className="time">
                            <div>52 <br /> <span>mins</span></div>
                            <div>25 <br /> <span>secs</span></div>
                        </div>
                    </div>
                    <div className="available">
                        <p>Packages Available</p>
                        <button onClick={() => setIsEnglish(false)} className={`hindi ${!isEnglish ? 'active' : ''}`}>IAS हिंदी</button>
                        <button onClick={() => setIsEnglish(true)} className={`english ${isEnglish ? 'active' : ''}`}>IAS English</button>
                    </div>
                    <div className="highlights">
                        <div className="row">
                            <div className="col-lg-2 col-xs-2 col-sm-2 col-4">
                                <p>Highlights</p>
                            </div>
                            <div className="col-lg-10 col-xs-10 col-sm-10 col-8">
                                <h3>* UPSC Prelims and Mains Covered</h3>
                                <h3>* Set of 11 books, 4200+ pages</h3>
                                <h3>* Collection of 11000+ UPSC topics</h3>
                                <h3>* 100+ study hours</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-xs-2 col-sm-2 col-4">
                                <img src="/img/upsc.png" className="img-fluid" alt="UPSC" />
                                <div className="shadow"></div>
                            </div>
                            <div className="col-lg-10 col-xs-10 col-sm-10 col-8">
                                <h3>100% Authentic | Quality Guaranteed</h3>
                                <h3>Full Syllabus Coverage</h3>
                                <h3>Focused Material</h3>
                                <h3>Trusted by 50000+ Students</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
