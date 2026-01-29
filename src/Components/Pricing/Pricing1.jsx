import { useState } from "react";
import PricingCard from "../Card/PricingCard";

const Pricing1 = ({ CoulmnClass }) => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section className={CoulmnClass}>
            <div className="left-shape float-bob-y">
                <img src="/assets/img/pricing-left.png" alt="img" />
            </div>
            <div className="right-shape float-bob-y">
                <img src="/assets/img/pricing-right.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="pricing-content">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>Flexible Pricing Packages</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Choose the Best Plan <br /> for Your Business
                                </h2>
                            </div>
                            <div className="pricing-tab-header mt-4 mt-md-0">
                                <div className="arrow-shape">
                                    <img src="/assets/img/arrow.png" alt="img" />
                                </div>
                                <ul className="nav" role="tablist">
                                    <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation" onClick={() => setIsActive('monthly')}>
                                        <a href="#monthly" className={`nav-link ${isActive === 'monthly' ? 'active' : ''}`} aria-selected={isActive === 'monthly'} role="tab">
                                            Monthly
                                        </a>
                                    </li>
                                    <li className="nav-item" data-wow-delay=".5s" role="presentation" onClick={() => setIsActive('yearly')}>
                                        <a href="#yearly" className={`nav-link ${isActive === 'yearly' ? 'active' : ''}`} aria-selected={isActive === 'yearly'} role="tab">
                                            Yearly
                                        </a>
                                    </li>
                                </ul>
                                <div className="save-text">
                                    Save 25%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="tab-content">
                            <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="monthly" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <PricingCard
                                            addclass="pricing-box-items"
                                            title="Starter Plan"
                                            price="$99"
                                            month="Month"
                                            FeatureList={[
                                                "Single Page Website",
                                                "Mobile Responsive Design",
                                                "Basic SEO Setup",
                                                "Contact Form Integration",
                                                "Social Media Links",
                                                "1 Month Free Support",
                                                "SSL Certificate Setup",
                                            ]}
                                            btnurl="#contact"
                                            btnname="Get Started Now"
                                        ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <PricingCard
                                            addclass="pricing-box-items style-2"
                                            title="Professional Plan"
                                            price="$249"
                                            month="Month"
                                            FeatureList={[
                                                "Multi-Page Website (5 Pages)",
                                                "Custom UI/UX Design",
                                                "Advanced SEO Optimization",
                                                "E-commerce Integration",
                                                "Payment Gateway Setup",
                                                "3 Months Free Support",
                                                "Admin Dashboard",
                                            ]}
                                            btnurl="#contact"
                                            btnname="Get Started Now"
                                        ></PricingCard>
                                    </div>
                                </div>
                            </div>
                            <div id="yearly" className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <PricingCard
                                            addclass="pricing-box-items"
                                            title="Starter Plan"
                                            price="$899"
                                            month="Year"
                                            FeatureList={[
                                                "Single Page Website",
                                                "Mobile Responsive Design",
                                                "Basic SEO Setup",
                                                "Contact Form Integration",
                                                "Social Media Links",
                                                "12 Months Free Support",
                                                "SSL Certificate Setup",
                                            ]}
                                            btnurl="#contact"
                                            btnname="Get Started Now"
                                        ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <PricingCard
                                            addclass="pricing-box-items style-2"
                                            title="Professional Plan"
                                            price="$2,249"
                                            month="Year"
                                            FeatureList={[
                                                "Multi-Page Website (5 Pages)",
                                                "Custom UI/UX Design",
                                                "Advanced SEO Optimization",
                                                "E-commerce Integration",
                                                "Payment Gateway Setup",
                                                "12 Months Free Support",
                                                "Admin Dashboard",
                                            ]}
                                            btnurl="#contact"
                                            btnname="Get Started Now"
                                        ></PricingCard>
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

export default Pricing1;