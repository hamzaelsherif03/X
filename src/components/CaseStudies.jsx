import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CaseStudies.css';

const CaseStudies = () => {
    return (
        <section className="case-studies-section">
            <div className="cs-bg-glow" />
            <div className="container cs-container">
                <div className="cs-header">
                    <span className="cs-label">Success Stories</span>
                    <h2 className="cs-title">
                        How Global Logistics Inc. Saved <span className="gradient-text">$50M Annually</span>
                    </h2>
                </div>

                <div className="featured-story">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="story-visual"
                    >
                        <div className="story-image-placeholder">
                            <div className="data-flow-grid" />
                            <div className="data-stream" style={{ top: '30%', left: '10%', animationDelay: '0s' }} />
                            <div className="data-stream" style={{ top: '60%', left: '20%', animationDelay: '1.5s' }} />
                            <div className="data-stream" style={{ top: '45%', left: '40%', animationDelay: '0.8s' }} />

                            {/* Meaningful Dashboard Overlay */}
                            <div style={{
                                position: 'absolute',
                                width: '75%',
                                height: '70%',
                                background: 'rgba(10, 10, 10, 0.95)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '4px',
                                boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1.5rem',
                                gap: '1rem'
                            }}>
                                {/* Header */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: '#9CA3AF',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>Route Optimization Dashboard</div>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#10B981',
                                        boxShadow: '0 0 8px #10B981'
                                    }} />
                                </div>

                                {/* Metrics Row */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        flex: 1,
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '3px',
                                        padding: '0.75rem'
                                    }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', lineHeight: '1' }}>18%</div>
                                        <div style={{ fontSize: '0.65rem', color: '#6B7280', marginTop: '0.25rem', textTransform: 'uppercase' }}>Fuel Saved</div>
                                    </div>
                                    <div style={{
                                        flex: 1,
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '3px',
                                        padding: '0.75rem'
                                    }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', lineHeight: '1' }}>2.3h</div>
                                        <div style={{ fontSize: '0.65rem', color: '#6B7280', marginTop: '0.25rem', textTransform: 'uppercase' }}>Time Reduced</div>
                                    </div>
                                </div>

                                {/* Route Visualization */}
                                <div style={{
                                    flex: 1,
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                    borderRadius: '3px',
                                    padding: '1rem',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {/* Simulated Route Lines */}
                                    <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                                        <path d="M 10 80 Q 40 20, 90 60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                                        <path d="M 90 60 Q 140 40, 180 70" stroke="#fff" strokeWidth="2.5" fill="none" />
                                        <circle cx="10" cy="80" r="4" fill="#6B7280" />
                                        <circle cx="90" cy="60" r="5" fill="#fff" />
                                        <circle cx="180" cy="70" r="4" fill="#6B7280" />
                                    </svg>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0.5rem',
                                        right: '0.5rem',
                                        fontSize: '0.6rem',
                                        color: '#6B7280',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>Optimized Path</div>
                                </div>

                                {/* Status Bar */}
                                <div style={{
                                    display: 'flex',
                                    gap: '0.5rem',
                                    alignItems: 'center',
                                    paddingTop: '0.5rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Active Routes:</div>
                                    <div style={{
                                        height: '4px',
                                        flex: 1,
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        borderRadius: '2px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            width: '73%',
                                            background: 'linear-gradient(90deg, #10B981, #059669)',
                                            borderRadius: '2px'
                                        }} />
                                    </div>
                                    <div style={{ fontSize: '0.65rem', color: '#fff', fontWeight: '600' }}>234/320</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="story-content"
                    >
                        <div className="story-logo">Global Logistics Inc.</div>
                        <blockquote className="story-quote">
                            "The predictive engine didn't just optimize our routes; it fundamentally changed how we allocate capital across our entire supply chain."
                        </blockquote>

                        <div className="story-metrics">
                            <div className="metric-item">
                                <h4>18%</h4>
                                <p>Fuel Reduction</p>
                            </div>
                            <div className="metric-item">
                                <h4>300%</h4>
                                <p>ROI First Year</p>
                            </div>
                        </div>

                        <button className="read-story-btn">
                            Read Full Case Study <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default CaseStudies;
