import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const getHref = (anchor) => isHomePage ? anchor : `/${anchor}`;

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div>
            <section className="cta-section section-bg section-padding pb-0">
                <div className="rokect-shape float-bob-y">
                    <img src="/assets/img/rokect.png" alt="img" />
                </div>
                <div className="container">
                    <div className="cta-wrapper bg-cover" data-background="/assets/img/cta-bg.jpg">
                        <div className="cta-img wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            <img src="/assets/img/cta-img.png" alt="img" />
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Transform Your Vision <br /> Into Digital Reality
                        </h2>
                        <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                            <a href={getHref('#contact')}> <span className="theme-btn"> talk TO  A SPECIALIST </span><span className="arrow-btn"> <i className="bi bi-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </section >

            <section className="footer-section footer-bg fix">
                <div className="container">
                    <div className="footer-widgets-wrapper">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <a href={getHref('#home')}>
                                            <img src="/assets/img/logo/logo.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Pixel Web Developers is a premier full-service web design and development agency based in Lahore, Pakistan.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <a href="https://www.instagram.com/pixel_web_dev/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                                            <a href="https://www.facebook.com/people/Pixel-Web-Developers/61587056282677/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                                            <a href="https://www.linkedin.com/company/pixel-web-developers/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href={getHref('#about')}>
                                                <i className="bi bi-arrow-right"></i>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href={getHref('#service')}>
                                                <i className="bi bi-arrow-right"></i>
                                                Our Services
                                            </a>
                                        </li>

                                        <li>
                                            <a href={getHref('#contact')}>
                                                <i className="bi bi-arrow-right"></i>
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/privacy-policy">
                                                <i className="bi bi-arrow-right"></i>
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Core Services</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href={getHref('#service')}>
                                                <i className="bi bi-arrow-right"></i>
                                                Web Development
                                            </a>
                                        </li>
                                        <li>
                                            <a href={getHref('#service')}>
                                                <i className="bi bi-arrow-right"></i>
                                                UI/UX Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href={getHref('#service')}>
                                                <i className="bi bi-arrow-right"></i>
                                                E-commerce Solutions
                                            </a>
                                        </li>
                                        <li>
                                            <a href={getHref('#service')}>
                                                <i className="bi bi-arrow-right"></i>
                                                SEO Optimization
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fa-regular fa-envelope"></i>
                                                <a href="mailto:info@pixelwebdevelopers.com">info@pixelwebdevelopers.com</a>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume"></i>
                                                <a href="tel:+923287623637">+92 328 7623637</a>
                                            </li>
                                        </ul>
                                        <div className="footer-input">
                                            <input type="email" id="email2" placeholder="Your email address" />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I agree to the <Link to="/privacy-policy">Privacy Policy.</Link>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright 2026 by Pixel Web Developers
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <a href={getHref('#contact')}>
                                        Terms & Condition
                                    </a>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href={getHref('#home')} id="scrollUp" className="scroll-icon">
                        <i className="bi bi-arrow-up"></i>
                    </a>
                </div>
            </section>

        </div >
    );
};

export default Footer1;
