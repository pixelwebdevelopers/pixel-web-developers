import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-policy-page">
            {/* Page Header */}
            <section className="privacy-header section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="privacy-header-content text-center">
                                <h1>Privacy Policy</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Privacy Policy
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="privacy-content-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="privacy-content-wrapper">

                                <div className="privacy-intro">
                                    <p className="intro-text">
                                        At <strong>Pixel Web Developers</strong>, we are committed to protecting your privacy and ensuring
                                        the security of your personal information. This Privacy Policy explains how we collect, use,
                                        disclose, and safeguard your information when you visit our website or engage our web development,
                                        design, and digital marketing services.
                                    </p>
                                    <p className="last-updated">
                                        <strong>Last Updated:</strong> January 25, 2026
                                    </p>
                                </div>

                                <div className="policy-section">
                                    <h2>1. Information We Collect</h2>
                                    <p>
                                        We collect information that you provide directly to us and information we automatically
                                        gather when you use our services. This includes:
                                    </p>

                                    <h3>Personal Information</h3>
                                    <ul className="policy-list">
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span><strong>Contact Details:</strong> Name, email address, phone number, and business address when you contact us for inquiries or project consultations.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span><strong>Business Information:</strong> Company name, website URL, industry type, and project requirements when you request our web development or design services.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span><strong>Payment Information:</strong> Billing details, invoicing information, and payment records for project transactions.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span><strong>Communication Records:</strong> Email correspondences, chat messages, and meeting notes related to your project.</span>
                                        </li>
                                    </ul>

                                    <h3>Automatically Collected Information</h3>
                                    <ul className="policy-list">
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span><strong>Usage Data:</strong> Pages visited, time spent on our website, click patterns, and referral sources.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance user experience and analyze website traffic.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="policy-section">
                                    <h2>2. How We Use Your Information</h2>
                                    <p>
                                        Pixel Web Developers uses the collected information for the following purposes:
                                    </p>
                                    <ul className="policy-list">
                                        <li>
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            <span><strong>Service Delivery:</strong> To provide web development, UI/UX design, e-commerce solutions, SEO optimization, and other digital services you request.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            <span><strong>Project Communication:</strong> To communicate with you about project progress, updates, deliverables, and support.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            <span><strong>Billing and Payments:</strong> To process invoices, payments, and maintain accurate financial records.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            <span><strong>Service Improvement:</strong> To analyze user behavior and feedback to improve our website and services.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            <span><strong>Marketing Communications:</strong> To send newsletters, promotional materials, and updates about our services (with your consent).</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            <span><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="policy-section">
                                    <h2>3. Information Sharing and Disclosure</h2>
                                    <p>
                                        We respect your privacy and do not sell, trade, or rent your personal information to third parties.
                                        However, we may share your information in the following circumstances:
                                    </p>
                                    <ul className="policy-list">
                                        <li>
                                            <i className="bi bi-shield-check"></i>
                                            <span><strong>Service Providers:</strong> We may share information with trusted third-party vendors who assist us in delivering our services, such as hosting providers, payment processors, and analytics tools.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-shield-check"></i>
                                            <span><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-shield-check"></i>
                                            <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-shield-check"></i>
                                            <span><strong>With Your Consent:</strong> We may share information with third parties when you explicitly authorize us to do so.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="policy-section">
                                    <h2>4. Data Security</h2>
                                    <p>
                                        We implement industry-standard security measures to protect your personal information from
                                        unauthorized access, alteration, disclosure, or destruction. Our security practices include:
                                    </p>
                                    <div className="security-features">
                                        <div className="security-item">
                                            <div className="security-icon">
                                                <i className="bi bi-lock-fill"></i>
                                            </div>
                                            <div className="security-content">
                                                <h4>SSL Encryption</h4>
                                                <p>All data transmitted through our website is encrypted using SSL/TLS protocols.</p>
                                            </div>
                                        </div>
                                        <div className="security-item">
                                            <div className="security-icon">
                                                <i className="bi bi-server"></i>
                                            </div>
                                            <div className="security-content">
                                                <h4>Secure Servers</h4>
                                                <p>Client data and project files are stored on secure, access-controlled servers.</p>
                                            </div>
                                        </div>
                                        <div className="security-item">
                                            <div className="security-icon">
                                                <i className="bi bi-person-lock"></i>
                                            </div>
                                            <div className="security-content">
                                                <h4>Access Controls</h4>
                                                <p>Only authorized team members have access to sensitive client information.</p>
                                            </div>
                                        </div>
                                        <div className="security-item">
                                            <div className="security-icon">
                                                <i className="bi bi-cloud-arrow-up"></i>
                                            </div>
                                            <div className="security-content">
                                                <h4>Regular Backups</h4>
                                                <p>We maintain regular backups to prevent data loss and ensure business continuity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="policy-section">
                                    <h2>5. Cookies and Tracking Technologies</h2>
                                    <p>
                                        Our website uses cookies and similar tracking technologies to enhance your browsing experience.
                                        These technologies help us:
                                    </p>
                                    <ul className="policy-list">
                                        <li>
                                            <i className="bi bi-gear-fill"></i>
                                            <span>Remember your preferences and settings</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-bar-chart-fill"></i>
                                            <span>Analyze website traffic and user behavior</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-bullseye"></i>
                                            <span>Deliver targeted content and advertisements</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-speedometer2"></i>
                                            <span>Improve website performance and functionality</span>
                                        </li>
                                    </ul>
                                    <p className="cookie-notice">
                                        You can control cookie settings through your browser preferences. However, disabling cookies
                                        may affect some features of our website.
                                    </p>
                                </div>

                                <div className="policy-section">
                                    <h2>6. Your Rights and Choices</h2>
                                    <p>
                                        You have certain rights regarding your personal information:
                                    </p>
                                    <div className="rights-grid">
                                        <div className="rights-item">
                                            <i className="bi bi-eye-fill"></i>
                                            <h4>Access</h4>
                                            <p>Request a copy of the personal information we hold about you.</p>
                                        </div>
                                        <div className="rights-item">
                                            <i className="bi bi-pencil-fill"></i>
                                            <h4>Correction</h4>
                                            <p>Request correction of any inaccurate or incomplete information.</p>
                                        </div>
                                        <div className="rights-item">
                                            <i className="bi bi-trash-fill"></i>
                                            <h4>Deletion</h4>
                                            <p>Request deletion of your personal information (subject to legal requirements).</p>
                                        </div>
                                        <div className="rights-item">
                                            <i className="bi bi-x-circle-fill"></i>
                                            <h4>Opt-Out</h4>
                                            <p>Unsubscribe from marketing communications at any time.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="policy-section">
                                    <h2>7. Third-Party Links</h2>
                                    <p>
                                        Our website may contain links to third-party websites, plugins, or applications. We are not
                                        responsible for the privacy practices or content of these external sites. We encourage you to
                                        review the privacy policies of any third-party websites you visit through links on our site.
                                    </p>
                                </div>

                                <div className="policy-section">
                                    <h2>8. Children's Privacy</h2>
                                    <p>
                                        Our services are not directed to individuals under the age of 18. We do not knowingly collect
                                        personal information from children. If we become aware that we have collected personal information
                                        from a child without parental consent, we will take steps to delete that information.
                                    </p>
                                </div>

                                <div className="policy-section">
                                    <h2>9. International Data Transfers</h2>
                                    <p>
                                        As Pixel Web Developers operates from Lahore, Pakistan, your information may be processed and
                                        stored in Pakistan. By using our services, you consent to the transfer of your information to
                                        Pakistan and other jurisdictions where we or our service providers operate.
                                    </p>
                                </div>

                                <div className="policy-section">
                                    <h2>10. Data Retention</h2>
                                    <p>
                                        We retain your personal information for as long as necessary to fulfill the purposes outlined
                                        in this Privacy Policy, unless a longer retention period is required by law. Project-related
                                        data is typically retained for a minimum of 5 years after project completion for reference
                                        and legal purposes.
                                    </p>
                                </div>

                                <div className="policy-section">
                                    <h2>11. Changes to This Policy</h2>
                                    <p>
                                        We may update this Privacy Policy from time to time to reflect changes in our practices or
                                        applicable laws. We will notify you of any material changes by posting the updated policy on
                                        our website with a new "Last Updated" date. We encourage you to review this policy periodically.
                                    </p>
                                </div>

                                <div className="policy-section contact-section">
                                    <h2>12. Contact Us</h2>
                                    <p>
                                        If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                                        practices, please contact us:
                                    </p>
                                    <div className="contact-info-box">
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <i className="bi bi-building"></i>
                                            </div>
                                            <div className="contact-text">
                                                <strong>Pixel Web Developers</strong>
                                                <p>Lahore, Pakistan</p>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <i className="bi bi-envelope-fill"></i>
                                            </div>
                                            <div className="contact-text">
                                                <strong>Email</strong>
                                                <p><a href="mailto:info@pixelwebdevelopers.com">info@pixelwebdevelopers.com</a></p>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <i className="bi bi-telephone-fill"></i>
                                            </div>
                                            <div className="contact-text">
                                                <strong>Phone</strong>
                                                <p><a href="tel:+923287623637">+92 328 7623637</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="policy-footer">
                                    <p>
                                        By using our website and services, you acknowledge that you have read, understood, and agree
                                        to be bound by this Privacy Policy.
                                    </p>
                                    <div className="back-home">
                                        <Link to="/" className="theme-btn-outline">
                                            <i className="bi bi-arrow-left"></i> Back to Home
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
