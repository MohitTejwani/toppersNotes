import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Testimonial = () => {
    return (
        <div className="testimonials">
            <OwlCarousel
                className="owl-theme"
                loop
                // autoplay
                // margin={20}
                items="1"
                nav={false}
                dots={true}
                responsiveClass={true}
                responsive={{
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }}>
                <div className="testimonial-item">
                    <h1>“When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of Khan Academy.”</h1>
                    <div className="content">
                        <h2 className="text">ANJALI<br /> <span>Gurugram, Haryana</span></h2>
                        <div className="img">
                            <img src="/img/download.jpg" alt="User" />
                            <div className="shadow"></div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <h1>“When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of Khan Academy.”</h1>
                    <div className="content">
                        <h2 className="text">ANJALI<br /> <span>Gurugram, Haryana</span></h2>
                        <div className="img">
                            <img src="/img/download.jpg" alt="User" />
                            <div className="shadow"></div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <h1>“When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of Khan Academy.”</h1>
                    <div className="content">
                        <h2 className="text">ANJALI<br /> <span>Gurugram, Haryana</span></h2>
                        <div className="img">
                            <img src="/img/download.jpg" alt="User" />
                            <div className="shadow"></div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Testimonial
