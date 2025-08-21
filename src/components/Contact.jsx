import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            setStatus(res.data.msg || "Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("Error sending message. Please try again.");
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <div className="contact-title-wrapper d-inline-block position-relative mb-4">
                            <h2 className="display-3 fw-bold text-white mb-0">
                                Let's Connect
                            </h2>
                            <div className="contact-title-underline position-absolute w-50 mx-auto"></div>
                        </div>
                        <p className="lead text-light opacity-75 mb-0">
                            Ready to collaborate? Let's create something amazing together.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center g-5">
                    {/* Left Section */}
                    <div className="col-lg-6">
                        <div className="pe-lg-4">
                            <div className="mb-5">
                                <h3 className="h4 fw-bold text-white mb-3">
                                    <i className="bi bi-chat-dots-fill text-info me-2"></i>
                                    Get In Touch
                                </h3>
                                <p className="text-light opacity-75 mb-4">
                                    I'm always open to discussing new opportunities,
                                    creative projects, or just having a friendly conversation
                                    about technology and innovation.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="mb-5">
                                <h4 className="h5 fw-bold text-white mb-4">Connect with me:</h4>
                                <div className="d-flex gap-3 flex-wrap">
                                    <a href="mailto:mdijas555@gmail.com" className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-3">
                                        <i className="bi bi-envelope-fill fs-5"></i>
                                        <span className="fw-semibold">Email</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohamedijas03" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-3">
                                        <i className="bi bi-linkedin fs-5"></i>
                                        <span className="fw-semibold">LinkedIn</span>
                                    </a>
                                    <a href="https://github.com/Mohamed495104" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-3">
                                        <i className="bi bi-github fs-5"></i>
                                        <span className="fw-semibold">GitHub</span>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="contact-info-card p-4 rounded-4">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-clock-fill text-info fs-5 me-3"></i>
                                    <div>
                                        <h6 className="text-white mb-1 fw-semibold">Response Time</h6>
                                        <p className="text-light opacity-75 mb-0 small">Usually within 24 hours</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-geo-alt-fill text-info fs-5 me-3"></i>
                                    <div>
                                        <h6 className="text-white mb-1 fw-semibold">Location</h6>
                                        <p className="text-light opacity-75 mb-0 small">Available for remote work</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="col-lg-6">
                        <div className="contact-form-wrapper p-5 rounded-4 shadow-lg">
                            <div className="mb-4">
                                <h3 className="h4 fw-bold text-white mb-2">Send a Message</h3>
                                <p className="text-light opacity-75 mb-0">Drop me a line and I'll get back to you soon!</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label text-white fw-semibold mb-2">
                                        <i className="bi bi-person-fill me-2 text-info"></i>Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="form-control form-control-lg border-0 shadow-sm contact-input"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label text-white fw-semibold mb-2">
                                        <i className="bi bi-envelope-fill me-2 text-info"></i>Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="form-control form-control-lg border-0 shadow-sm contact-input"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label text-white fw-semibold mb-2">
                                        <i className="bi bi-chat-text-fill me-2 text-info"></i>Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="form-control form-control-lg border-0 shadow-sm contact-input contact-textarea"
                                        placeholder="Tell me about your project or just say hello..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-lg w-100 fw-bold shadow-lg contact-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            SENDING...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-send-fill me-2"></i>SEND MESSAGE
                                        </>
                                    )}
                                </button>
                            </form>

                            {status && (
                                <p className="mt-3 text-center text-light fw-semibold">{status}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
