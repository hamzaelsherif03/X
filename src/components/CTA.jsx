import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Social Proof Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-black" />
                            ))}
                        </div>
                        <span className="text-sm text-white/60">
                            Join <span className="text-white font-semibold">500+</span> companies optimizing their supply chain
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight"
                    >
                        Ready to optimize <br /> your supply chain?
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join industry leaders who are using OptiFlow AI to predict delays, automate routing, and save millions.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-base hover:scale-[1.02] transition-all duration-150 flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.08),0_0_20px_rgba(255,255,255,0.1)]">
                            Start Free Trial
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                        </button>
                        <button className="px-8 py-4 bg-white/[0.04] text-white border border-white/[0.06] rounded-full font-semibold text-base hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200">
                            Talk to Sales
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40"
                    >
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            <span>4.9/5 rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>500+ companies</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>300% avg ROI</span>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none hidden lg:block"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none hidden lg:block"
                />
            </div>
        </section>
    );
};

export default CTA;
