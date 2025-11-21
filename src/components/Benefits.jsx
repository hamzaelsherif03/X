import React from 'react';
import { motion } from 'framer-motion';
import './Benefits.css';

const stats = [
    { label: "Fuel Savings", value: "15%", suffix: "" },
    { label: "Delivery Speed", value: "2.5", suffix: "x" },
    { label: "Asset Utilization", value: "94%", suffix: "" },
    { label: "ROI First Year", value: "300%", suffix: "+" }
];

const Benefits = () => {
    return (
        <section className="benefits-section">
            <div className="container">
                <div className="benefits-container">
                    <div>
                        <h2 className="benefits-title">Measurable <span className="gradient-text">Results</span></h2>
                        <p className="benefits-desc">
                            Our AI doesn't just make suggestions; it drives tangible business outcomes.
                            See the impact on your bottom line within weeks, not months.
                        </p>

                        <div className="benefits-stats-grid">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="benefit-stat"
                                >
                                    <span className="stat-value">
                                        {stat.value.replace(stat.suffix, '')}
                                        <span className="stat-suffix">{stat.suffix}</span>
                                    </span>
                                    <p className="stat-label">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="benefits-visual">
                        <div className="benefits-card">
                            <h3 className="chart-title">Monthly Savings Projection</h3>
                            <div className="chart-container">
                                {[
                                    { label: "Fuel Costs", width: "80%", color: "bg-blue" },
                                    { label: "Maintenance", width: "60%", color: "bg-purple" },
                                    { label: "Overtime", width: "40%", color: "bg-pink" },
                                    { label: "Admin Time", width: "90%", color: "bg-cyan" }
                                ].map((item, i) => (
                                    <div key={i} className="chart-row">
                                        <div className="chart-labels">
                                            <span className="chart-label-text">{item.label}</span>
                                            <span className="chart-label-sub">Reduced</span>
                                        </div>
                                        <div className="chart-bar-bg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: item.width }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`chart-bar-fill ${item.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
