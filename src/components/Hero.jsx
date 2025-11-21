import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Database, Brain, Target, Zap, CheckCircle2, Activity } from 'lucide-react';

const steps = [
    {
        id: 0,
        title: "Data Ingestion",
        status: "Connected",
        desc: "Syncing ERP, WMS & Fleet data...",
        icon: Database,
        color: "text-blue-500",
        bg: "bg-blue-500"
    },
    {
        id: 1,
        title: "AI Simulation",
        status: "Processing",
        desc: "Running 1.2M scenario variants...",
        icon: Brain,
        color: "text-purple-500",
        bg: "bg-purple-500"
    },
    {
        id: 2,
        title: "Optimization",
        status: "Solved",
        desc: "Identifying lowest cost routes...",
        icon: Target,
        color: "text-orange-500",
        bg: "bg-orange-500"
    },
    {
        id: 3,
        title: "Auto-Execution",
        status: "Active",
        desc: "Dispatching orders to carriers...",
        icon: Zap,
        color: "text-green-500",
        bg: "bg-green-500"
    }
];

const Hero = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex items-center pt-32 md:pt-20 overflow-hidden bg-[#050505]">

            {/* Background Ambience - Enterprise Grid */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Radial Spotlight */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3B82F615,transparent)]" />

                {/* Subtle Horizon Fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-green-500 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            </span>
                            <span className="text-xs font-medium text-white/70 tracking-wide">System Operational</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
                        >
                            You can't fix <br />
                            <span className="text-white/40">
                                what you can't see.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg"
                        >
                            40% of your supply chain is a black box. OptiFlow illuminates every shipment, predicting delays before they become disasters.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                                Start Free Trial
                                <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                                <Play size={18} className="fill-current" />
                                Watch Demo
                            </button>
                        </motion.div>

                        <div className="mt-12 flex items-center gap-6 text-sm text-white/40 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-blue-500" />
                                <span>SOC2 Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-blue-500" />
                                <span>99.9% Uptime</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Live Processing Unit */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Main Card */}
                        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="h-14 border-b border-white/10 bg-white/5 flex items-center justify-between px-6">
                                <div className="flex items-center gap-3">
                                    <Activity size={16} className="text-blue-500" />
                                    <span className="text-xs font-mono text-white/60 uppercase tracking-wider">Live Pipeline</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                </div>
                            </div>

                            {/* Steps List */}
                            <div className="p-2">
                                {steps.map((step, index) => {
                                    const isActive = activeStep === index;
                                    return (
                                        <motion.div
                                            key={step.id}
                                            animate={{
                                                backgroundColor: isActive ? "rgba(255,255,255,0.03)" : "transparent",
                                                borderColor: isActive ? "rgba(255,255,255,0.1)" : "transparent"
                                            }}
                                            className={`relative rounded-xl border border-transparent p-4 mb-2 transition-colors duration-300 overflow-hidden`}
                                        >
                                            {/* Active Progress Bar Background */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeGlow"
                                                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                />
                                            )}

                                            <div className="relative z-10 flex items-center gap-4">
                                                {/* Icon Box */}
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-white/10' : 'bg-white/5'}`}>
                                                    <step.icon size={20} className={isActive ? step.color : "text-white/20"} />
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <h3 className={`font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40'}`}>
                                                            {step.title}
                                                        </h3>
                                                        {isActive && (
                                                            <span className={`text-[10px] font-mono uppercase tracking-wider ${step.color}`}>
                                                                {step.status}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="relative h-5 overflow-hidden">
                                                        <AnimatePresence mode="wait">
                                                            {isActive ? (
                                                                <motion.p
                                                                    key="active"
                                                                    initial={{ y: 10, opacity: 0 }}
                                                                    animate={{ y: 0, opacity: 1 }}
                                                                    exit={{ y: -10, opacity: 0 }}
                                                                    className="text-sm text-white/60"
                                                                >
                                                                    {step.desc}
                                                                </motion.p>
                                                            ) : (
                                                                <motion.div
                                                                    key="inactive"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    className="h-1.5 w-24 bg-white/5 rounded-full mt-2"
                                                                />
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>

                                                {/* Active Indicator Dot */}
                                                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? step.bg : 'bg-white/5'}`} />
                                            </div>

                                            {/* Progress Line for Active Step */}
                                            {isActive && (
                                                <motion.div
                                                    className={`absolute bottom-0 left-0 h-[2px] ${step.bg}`}
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 3, ease: "linear" }}
                                                />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Footer Stats */}
                            <div className="border-t border-white/10 bg-white/5 p-4 grid grid-cols-3 gap-4">
                                <div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Latency</div>
                                    <div className="text-sm font-mono text-white">24ms</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Requests</div>
                                    <div className="text-sm font-mono text-white">842/s</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Success</div>
                                    <div className="text-sm font-mono text-green-400">99.9%</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements behind card */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-dashed border-white/5 rounded-3xl" />
                        <div className="absolute -z-20 -top-10 -left-10 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
