import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const Look = () => {
    return (
        <div className="look">
            <h1>LOOK INSIDE</h1>
            <h2>LOOK INSIDE</h2>
            <OwlCarousel
                className="owl-theme"
                loop
                stagePadding={100}
                // center
                // autoplay
                margin={20}
                // items="1"
                nav={false}
                dots={true}
                responsiveClass={true}
                responsive={{
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }}>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
                <div className="testimonial-item">
                    <img src="/img/book2.jpg" alt="Book"/>
                    <div className="content">
                        <h3>Zoology I - Biology</h3>
                        <p>216 Pages</p>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Look
