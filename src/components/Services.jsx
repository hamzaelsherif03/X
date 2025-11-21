import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Map, TrendingUp, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Zap size={24} />,
        title: "Real-time Decision Engine",
        desc: "Process thousands of variables instantly to make the best operational choices."
    },
    {
        icon: <Map size={24} />,
        title: "Route Optimization",
        desc: "Dynamic routing that adapts to traffic, weather, and vehicle constraints."
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Predictive Analytics",
        desc: "Forecast demand and supply chain bottlenecks before they happen."
    },
    {
        icon: <Shield size={24} />,
        title: "Enterprise Security",
        desc: "Bank-grade encryption and SOC2 compliance for your sensitive data."
    },
    {
        icon: <Clock size={24} />,
        title: "Automated Scheduling",
        desc: "Smart shift planning and resource allocation to maximize utilization."
    },
    {
        icon: <Users size={24} />,
        title: "Multi-User Collaboration",
        desc: "Seamlessly work across teams with role-based access and audit logs."
    }
];

const Services = () => {
    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-header">
                    <span className="services-subtitle">Our Expertise</span>
                    <h2 className="services-title">Comprehensive Logistics Solutions</h2>
                    <p className="services-desc">
                        We combine advanced AI with deep industry knowledge to deliver a platform that transforms your operations.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card"
                            onMouseMove={handleMouseMove}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-desc">
                                {service.desc}
                            </p>
                            <a href="#" className="service-link">
                                Learn more <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
