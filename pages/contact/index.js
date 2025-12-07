"use client";

import "./page.css";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Message sent! (Frontend only)");
    }

    return (
        <div className="contact-wrapper">

            <h2 className="contact-title">Contact Us</h2>

            <div className="contact-container">
                
                {/* LEFT SIDE INFO */}
                <div className="contact-info-box">
                    <h3>Get in Touch</h3>
                    <p>If you have any questions, feel free to contact us anytime.</p>

                    <div className="info-item">
                        <strong>Email:</strong> jasimtp78@gmail.com
                    </div>

                    <div className="info-item">
                        <strong>Phone:</strong> +91 9995378091
                    </div>

                    <div className="info-item">
                        <strong>Location:</strong> malappuram, Kerala, India
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>Your Name</label>
                    <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />

                    <label>Your Email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <label>Your Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={5}
                        required
                    ></textarea>

                    <button type="submit" className="send-btn">Send Message</button>
                </form>

            </div>
        </div>
    );
}
