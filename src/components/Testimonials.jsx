import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
    {
        quote: "The predictive accuracy is unmatched. We reduced our fleet idle time by 24% in the first quarter alone.",
        author: "Sarah Jenkins",
        role: "VP Operations, Global Logistics",
        initials: "SJ"
    },
    {
        quote: "Finally, a platform that understands the complexity of modern supply chains. The real-time decision engine is a game changer.",
        author: "Michael Chen",
        role: "CTO, TechFlow Supply",
        initials: "MC"
    },
    {
        quote: "Implementation was seamless. The API connectors worked out of the box with our legacy ERP system.",
        author: "David Ross",
        role: "Director of IT, FastTrack",
        initials: "DR"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">Trusted by <span className="gradient-text">Industry Leaders</span></h2>
                    <p className="testimonials-desc">
                        Join the forward-thinking companies transforming their operations with our intelligence engine.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="testimonial-card"
                        >
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.initials}</div>
                                <div className="author-info">
                                    <h4>{item.author}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
