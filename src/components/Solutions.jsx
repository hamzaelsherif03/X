import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from './Globe';
import { Box, Map, Globe2, ArrowRight, Zap, BarChart3 } from 'lucide-react';

const solutions = [
    {
        id: 'logistics',
        title: 'Global Logistics',
        description: 'Real-time visibility across ocean, air, and rail. Predict delays days in advance with our predictive weather and port congestion models.',
        icon: Globe2,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20'
    },
    {
        id: 'warehousing',
        title: 'Smart Warehousing',
        description: 'Automated inventory placement and retrieval. Our AI orchestrates robotic fleets to optimize storage density and throughput by 40%.',
        icon: Box,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20'
    },
    {
        id: 'lastmile',
        title: 'Last-Mile Delivery',
        description: 'Dynamic route optimization that adapts to traffic in real-time. Reduce fuel costs by 25% and improve on-time delivery rates.',
        icon: Map,
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20'
    }
];

const Solutions = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="max-w-2xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium text-white/80 uppercase tracking-wider">The Intelligence Engine</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        <span className="text-white/40">Chaos, meet</span> Order.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 leading-relaxed"
                    >
                        One platform to orchestrate your entire supply chain. From the factory floor to the customer's door, OptiFlow brings clarity to complexity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {solutions.map((solution, index) => {
                            const isActive = activeTab === index;
                            return (
                                <motion.button
                                    key={solution.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveTab(index)}
                                    className={`group relative p-6 rounded-2xl text-left transition-all duration-500 border ${isActive ? `bg-white/5 ${solution.border}` : 'bg-transparent border-transparent hover:bg-white/[0.02]'}`}
                                >
                                    {/* Active Progress Bar */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${solution.bg.replace('/10', '')}`}
                                        />
                                    )}

                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg transition-colors duration-500 ${isActive ? solution.bg : 'bg-white/5 group-hover:bg-white/10'}`}>
                                            <solution.icon size={24} className={`transition-colors duration-500 ${isActive ? solution.color : 'text-white/40 group-hover:text-white/60'}`} />
                                        </div>
                                        <div>
                                            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                                {solution.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/60' : 'text-white/40'}`}>
                                                {solution.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right Column: Interactive Visualization */}
                    <div className="lg:col-span-7 relative aspect-square lg:aspect-[4/3] rounded-3xl border border-white/10 bg-black/40 overflow-hidden backdrop-blur-sm">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                        <AnimatePresence mode="wait">
                            {activeTab === 0 && (
                                <motion.div
                                    key="globe"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-[140%] -mt-20">
                                        <Globe />
                                    </div>

                                    {/* Floating Stats Cards */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4"
                                    >
                                        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                                            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Active Shipments</div>
                                            <div className="text-2xl font-mono text-white">14,205</div>
                                        </div>
                                        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                                            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">On-Time Rate</div>
                                            <div className="text-2xl font-mono text-blue-400">98.4%</div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}

                            {activeTab === 1 && (
                                <motion.div
                                    key="warehousing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 p-8 flex flex-col"
                                >
                                    {/* Warehouse Grid Visualization */}
                                    <div className="flex-1 grid grid-cols-6 grid-rows-6 gap-2 relative">
                                        {Array.from({ length: 36 }).map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0.1 }}
                                                animate={{
                                                    opacity: [0.1, 0.5, 0.1],
                                                    backgroundColor: ["rgba(255,255,255,0.05)", "rgba(168,85,247,0.2)", "rgba(255,255,255,0.05)"]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2,
                                                    ease: "easeInOut"
                                                }}
                                                className="rounded-md border border-white/5"
                                            />
                                        ))}

                                        {/* Moving "Robots" */}
                                        <motion.div
                                            animate={{
                                                x: [0, 200, 200, 0, 0],
                                                y: [0, 0, 150, 150, 0]
                                            }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            className="absolute w-8 h-8 bg-purple-500/50 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-400 backdrop-blur-sm flex items-center justify-center z-10"
                                        >
                                            <Box size={14} className="text-white" />
                                        </motion.div>
                                        <motion.div
                                            animate={{
                                                x: [200, 0, 0, 200, 200],
                                                y: [150, 150, 0, 0, 150]
                                            }}
                                            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
                                            className="absolute w-8 h-8 bg-blue-500/50 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-400 backdrop-blur-sm flex items-center justify-center z-10"
                                        >
                                            <Box size={14} className="text-white" />
                                        </motion.div>
                                    </div>

                                    <div className="mt-8 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                            <span className="text-sm text-white/60 font-mono">AI ORCHESTRATION ACTIVE</span>
                                        </div>
                                        <div className="text-sm font-mono text-purple-400">EFFICIENCY: 94%</div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 2 && (
                                <motion.div
                                    key="lastmile"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 p-8"
                                >
                                    {/* Map Visualization */}
                                    <div className="w-full h-full relative rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                                        {/* Map Grid */}
                                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                                            {Array.from({ length: 16 }).map((_, i) => (
                                                <div key={i} className="border-r border-b border-white/5" />
                                            ))}
                                        </div>

                                        {/* Route Path SVG */}
                                        <svg className="absolute inset-0 w-full h-full p-8 overflow-visible">
                                            <motion.path
                                                d="M 20 20 L 100 80 L 180 40 L 260 120 L 340 60"
                                                fill="none"
                                                stroke="#22c55e"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                                            />
                                            {/* Waypoints */}
                                            {[
                                                { cx: 20, cy: 20 },
                                                { cx: 100, cy: 80 },
                                                { cx: 180, cy: 40 },
                                                { cx: 260, cy: 120 },
                                                { cx: 340, cy: 60 }
                                            ].map((point, i) => (
                                                <motion.circle
                                                    key={i}
                                                    cx={point.cx}
                                                    cy={point.cy}
                                                    r="4"
                                                    className="fill-[#050505] stroke-green-500 stroke-2"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: i * 0.4 }}
                                                />
                                            ))}
                                        </svg>

                                        {/* Delivery Card */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute bottom-4 right-4 bg-[#050505] border border-white/10 p-4 rounded-lg shadow-xl max-w-[200px]"
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                                    <Map size={14} className="text-green-500" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/40">ETA</div>
                                                    <div className="text-sm font-bold text-white">14:05 PM</div>
                                                </div>
                                            </div>
                                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-[75%] bg-green-500 rounded-full" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
