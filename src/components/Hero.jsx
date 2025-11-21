import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Globe } from './Globe';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[80px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            </span>
                            <span className="text-xs font-medium text-white/80">Global Logistics Intelligence v2.0</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
                        >
                            The operating system for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                                global trade.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg"
                        >
                            Orchestrate your entire supply chain with predictive AI. Real-time visibility, automated routing, and instant customs clearance in one platform.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <button className="px-6 py-3 bg-white text-black rounded-full font-semibold text-base hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                Start Free Trial
                                <ArrowRight size={18} />
                            </button>
                            <button className="px-6 py-3 bg-white/[0.05] text-white border border-white/[0.1] rounded-full font-semibold text-base hover:bg-white/[0.1] transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                                <Play size={18} className="fill-current" />
                                Watch Demo
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-6 text-xs font-medium text-white/40"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-500" />
                                <span>SOC2 Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-500" />
                                <span>99.99% Uptime</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-blue-500" />
                                <span>24/7 Support</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: 3D Globe */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full flex items-center justify-center lg:justify-center perspective-1000"
                    >
                        <div className="relative w-full max-w-[380px] aspect-square mx-auto">
                            <Globe className="w-full h-full" />

                            {/* Floating Cards around Globe */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="absolute top-16 right-0 md:-right-12 bg-black/80 backdrop-blur-md border border-white/[0.1] p-3 rounded-xl shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-white/60">SYSTEM STATUS</span>
                                </div>
                                <div className="text-xs font-bold text-white">All Systems Operational</div>
                                <div className="text-[10px] text-blue-400 mt-0.5">Latency: 24ms</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.8, duration: 0.8 }}
                                className="absolute bottom-16 left-0 md:-left-12 bg-black/80 backdrop-blur-md border border-white/[0.1] p-3 rounded-xl shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Globe size={12} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-white/60">ACTIVE SHIPMENTS</div>
                                        <div className="text-sm font-bold text-white">12,847</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
