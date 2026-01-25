import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactInfo1 = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: 'subject',
        message: '',
        agreed: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 3000);
            return;
        }

        if (!formData.agreed) {
            alert('Please agree to the Privacy Policy before submitting.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // EmailJS credentials from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    subject: 'subject',
                    message: '',
                    agreed: false
                });
            })
            .catch((error) => {
                console.error('Email send failed:', error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                // Clear status after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <section className="contact-section fix section-padding">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title bg-color-3 wow fadeInUp">
                            <span className="wow fadeInUp">Contact us</span>
                        </div>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            How can we help you today?
                        </h2>
                    </div>
                    <p className="white-text wow fadeInUp" data-wow-delay=".5s">
                        Ready to start your next project? <br /> Contact us today to discuss your web <br /> development needs and ideas.
                    </p>
                </div>
                <div className="contact-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-6">
                            <div className="contact-form-area">
                                <h3>Get in Touch</h3>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="alert alert-success mb-4" role="alert">
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="alert alert-danger mb-4" role="alert">
                                        <i className="bi bi-exclamation-circle-fill me-2"></i>
                                        Oops! Something went wrong. Please try again or contact us directly.
                                    </div>
                                )}

                                <form ref={form} onSubmit={handleSubmit} id="contact-form">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Full Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <input
                                                    type="tel"
                                                    name="number"
                                                    id="number"
                                                    placeholder="Phone Number"
                                                    value={formData.number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <select
                                                    name="subject"
                                                    className="single-select"
                                                    aria-label="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                >
                                                    <option value="subject">Subject</option>
                                                    <option value="web-development">Web Development</option>
                                                    <option value="ui-ux-design">UI/UX Design</option>
                                                    <option value="e-commerce">E-commerce Solutions</option>
                                                    <option value="seo">SEO Optimization</option>
                                                    <option value="general">General Inquiry</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-clt">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Your Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="agreed"
                                                    id="flexCheckChecked"
                                                    checked={formData.agreed}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    I agree to the Privacy Policy and consent to being contacted
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="theme-btn"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Now
                                                        <i className="bi bi-arrow-right ms-1"></i>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.4079485547!2d74.05419803698006!3d31.482635229643032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc20c4793d43d1a45!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v164984054261!5m2!1sen!2s" loading="lazy"></iframe>

                                <div className="contact-info-wrapper">
                                    <h2>Contact Info</h2>
                                    <div className="shape-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="39" viewBox="0 0 29 39"
                                            fill="none">
                                            <path d="M0 0L29 39V0H0Z" fill="#6A47ED" />
                                        </svg>
                                    </div>
                                    <div className="shape-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="39" viewBox="0 0 29 39"
                                            fill="none">
                                            <path d="M29 0L0 39V0H29Z" fill="#6A47ED" />
                                        </svg>
                                    </div>
                                    <div className="contact-info style2">
                                        <div className="icon">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                Pixel Web Developers, <br /> Lahore, Pakistan
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="contact-info style2">
                                        <div className="icon">
                                            <i className="bi bi-telephone-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                <a href="tel:+923287623637">+92 328 7623637</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="contact-info style2 border-none">
                                        <div className="icon">
                                            <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                <a href="mailto:info@pixelwebdevelopers.com">info@pixelwebdevelopers.com</a>
                                            </h3>
                                        </div>
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

export default ContactInfo1;
