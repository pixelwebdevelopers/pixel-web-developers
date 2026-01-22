import { useEffect } from "react";

const CaseStudy1 = () => {

    useEffect(() => {
        document.querySelectorAll('.box').forEach(box => {
            box.addEventListener('mouseenter', function () {
                document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }, []);

    return (
        <section className="case-study-section fix section-padding">
            <div className="overlay-shape">
                <img src="/assets/img/case-studies/overlay-shape.png" alt="img" />
            </div>
            <div className="left-shape float-bob-x">
                <img src="/assets/img/case-studies/left-shape.png" alt="img" />
            </div>
            <div className="right-shape float-bob-x">
                <img src="/assets/img/case-studies/right-shaape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>Case Studies</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Innovative Web Solutions <br />
                            For Your Success
                        </h2>
                    </div>
                    <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                        <a href="#project"> <span className="theme-btn"> EXPLORE MORE </span><span className="arrow-btn"><i className="bi bi-arrow-right"></i></span></a>

                    </div>
                </div>
                <div className="case-study-wrapper">
                    <div className="row">
                        <div className="col-xxl-6 wow fadeInUp">
                            <div className="case-study-box-items">
                                <div className="thumb">
                                    <img src="/assets/img/case-studies/01.jpg" alt="img" />
                                    <div className="post-box-items">
                                        <ul>
                                            <li>
                                                <a href="#project">E-Commerce <i className="bi bi-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="#project">Web Design <i className="bi bi-arrow-up-right"></i></a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="#project">Development <i className="bi bi-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="#project">Strategy <i className="bi bi-arrow-up-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="project-title">
                                        <a href="#project">
                                            <img src="/assets/img/case-studies/icon.png" alt="img" />
                                            Modern Marketplaces
                                        </a>
                                    </h3>
                                    <span className="number">01</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="main-box">

                                <div className="box wow fadeInUp">
                                    <div className="title-items">
                                        <h3><a href="#project">Portfolio Websites</a></h3>
                                        <span className="number">02</span>
                                    </div>
                                    <span className="number-hover">02</span>
                                    <div className="project-content">
                                        <h3><a href="#project">Portfolio Websites</a></h3>
                                        <p>
                                            Showcasing the best creative works and designs for agencies and freelancers.
                                        </p>
                                        <a href="#project" className="link-btn">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="box bg-1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="title-items">
                                        <h3><a href="#project">Corporate Platforms</a></h3>
                                        <span className="number">03</span>
                                    </div>
                                    <span className="number-hover">03</span>
                                    <div className="project-content">
                                        <h3><a href="#project">Corporate Platforms</a></h3>
                                        <p>
                                            Professional and secure platforms tailored for enterprise businesses across the globe.
                                        </p>
                                        <a href="#project" className="link-btn">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="box bg-2 active wow fadeInUp wow" data-wow-delay=".4s">
                                    <div className="title-items">
                                        <h3><a href="#project">Web & Mobile</a></h3>
                                        <span className="number">04</span>
                                    </div>
                                    <span className="number-hover">04</span>
                                    <div className="project-content">
                                        <h3><a href="#project">Web & Mobile Apps</a></h3>
                                        <p>
                                            Scalable and robust applications designed to solve complex business problems.
                                        </p>
                                        <a href="#project" className="link-btn">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="box bg-3 wow fadeInUp wow" data-wow-delay=".6s">
                                    <div className="title-items">
                                        <h3><a href="#project">API Integration</a></h3>
                                        <span className="number">05</span>
                                    </div>
                                    <span className="number-hover">05</span>
                                    <div className="project-content">
                                        <h3><a href="#project">API Integration</a></h3>
                                        <p>
                                            Seamless connectivity for your digital ecosystem with custom API solutions.
                                        </p>
                                        <a href="#project" className="link-btn">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy1;