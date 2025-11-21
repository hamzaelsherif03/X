import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, BarChart3, CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const steps = [
    {
        icon: <Database size={32} />,
        title: "Data Ingestion",
        desc: "Connect your ERP, WMS, and fleet data in seconds via our secure API."
    },
    {
        icon: <Cpu size={32} />,
        title: "AI Simulation",
        desc: "Our engine runs millions of scenarios to find the optimal path forward."
    },
    {
        icon: <BarChart3 size={32} />,
        title: "Optimization",
        desc: "Receive actionable recommendations to cut costs and boost efficiency."
    },
    {
        icon: <CheckCircle size={32} />,
        title: "Execution",
        desc: "Automate decisions or approve them with a single click."
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="hiw-header">
                    <h2 className="hiw-title">How It <span className="gradient-text">Works</span></h2>
                    <p className="hiw-desc">
                        From raw data to optimized decisions in four simple steps.
                    </p>
                </div>

                <div className="hiw-grid">
                    {/* Connecting Line */}
                    <div className="hiw-line" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="hiw-card-wrapper"
                        >
                            <div className="hiw-card">
                                <div className="hiw-icon-box">
                                    {step.icon}
                                </div>
                                <h3 className="hiw-card-title">{step.title}</h3>
                                <p className="hiw-card-desc">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
