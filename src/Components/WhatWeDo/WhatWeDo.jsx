import parse from 'html-react-parser';

const WhatWeDo = () => {

    const heading = {
        subtitle: "Our Services",
        title: 'Comprehensive Web <br> Solutions',
        content: 'We provide end-to-end web <br> development and design services.',
    }

    const whyContent = [
        { img: '/assets/img/service/icon-1.png', title: 'Custom Web Development', content: 'Tailored websites built with modern technologies to meet your specific business requirements.' },
        { img: '/assets/img/service/icon-2.png', title: 'E-commerce Solutions', content: 'Scalable and secure online stores designed to maximize your sales and growth.' },
        { img: '/assets/img/service/icon-3.png', title: 'SEO & Performance', content: 'Optimized speed and search rankings to ensure your audience finds you easily.' },
    ];

    return (
        <section className="service-section fix section-padding">
            <div className="left-shape float-bob-y">
                <img src="/assets/img/service/left-shape.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="/assets/img/service/right-shape.png" alt="img" />
            </div>
            <div className="bg-shape">
                <img src="/assets/img/service/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{heading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {parse(heading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                        {parse(heading.content)}
                    </p>
                </div>
                <div className="row">
                    {whyContent.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <img src={item.img} alt="img" />
                                </div>
                                <div className="content">
                                    <h4><a href="#service">{item.title}</a></h4>
                                    <p>{item.content}</p>
                                    <a href="#service" className="link-btn">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;