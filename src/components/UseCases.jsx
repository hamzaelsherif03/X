import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, BarChart, Globe, ArrowRight, CheckCircle2, User, Activity, Box, Map } from 'lucide-react';

const UseCases = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            label: "Logistics Managers",
            icon: Truck,
            title: "Automate your daily dispatch.",
            desc: "Eliminate manual routing. OptiFlow assigns drivers, optimizes routes, and handles exceptions automatically.",
            stats: [
                { label: "Dispatch Time", value: "-85%" },
                { label: "Fuel Savings", value: "12%" }
            ],
            quote: "OptiFlow cut our planning time from 4 hours to 15 minutes.",
            author: "Sarah Jenkins, Logistics Director"
        },
        {
            id: 1,
            label: "Supply Chain VPs",
            icon: Globe,
            title: "Global visibility, instantly.",
            desc: "See your entire network in one view. Drill down from global regions to individual containers in seconds.",
            stats: [
                { label: "Inventory Accuracy", value: "99.8%" },
                { label: "Stockouts", value: "-40%" }
            ],
            quote: "The visibility we gained across our 3PL network is unprecedented.",
            author: "Michael Chen, VP Supply Chain"
        },
        {
            id: 2,
            label: "Data Analysts",
            icon: BarChart,
            title: "Raw data to insights.",
            desc: "Export clean, structured data directly to Snowflake or BigQuery. Build custom dashboards with our API.",
            stats: [
                { label: "Data Latency", value: "<100ms" },
                { label: "API Uptime", value: "99.99%" }
            ],
            quote: "Finally, an API that's actually developer-friendly and reliable.",
            author: "Alex Rivera, Lead Data Engineer"
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/[0.06]">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left: Navigation */}
                    <div className="w-full lg:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-10 leading-tight"
                        >
                            Built for every <br />
                            <span className="text-white/40">stakeholder.</span>
                        </motion.h2>

                        <div className="space-y-3">
                            {tabs.map((tab, i) => (
                                <motion.button
                                    key={tab.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group border ${activeTab === tab.id
                                        ? 'bg-white/[0.08] border-white/[0.1] shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                        : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                                        }`}
                                >
                                    <div className={`p-2.5 rounded-lg transition-colors duration-300 ${activeTab === tab.id ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-white/[0.05] text-white/40 group-hover:text-white'
                                        }`}>
                                        <tab.icon size={20} />
                                    </div>
                                    <span className={`font-semibold text-lg transition-colors ${activeTab === tab.id ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                                        {tab.label}
                                    </span>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeArrow"
                                            className="ml-auto"
                                        >
                                            <ArrowRight size={18} className="text-blue-400" />
                                        </motion.div>
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Content Area */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative min-h-[600px] bg-black/40 border border-white/[0.08] rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm">
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="h-full flex flex-col relative z-10"
                                >
                                    <div className="mb-10">
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                                            {tabs[activeTab].title}
                                        </h3>
                                        <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
                                            {tabs[activeTab].desc}
                                        </p>

                                        {/* Glassmorphic Dashboard Visualization */}
                                        <div className="w-full h-64 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/[0.1] relative overflow-hidden mb-8 group shadow-2xl">
                                            {/* Grid Background */}
                                            <div className="absolute inset-0 opacity-20" style={{
                                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                                                backgroundSize: '30px 30px'
                                            }} />

                                            {/* Dashboard Header */}
                                            <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/[0.06] bg-white/[0.02] flex items-center px-4 gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                                                </div>
                                                <div className="ml-4 h-4 w-32 bg-white/[0.05] rounded-sm" />
                                            </div>

                                            {/* Dashboard Content */}
                                            <div className="absolute top-14 left-4 right-4 bottom-4 flex gap-4">
                                                {/* Sidebar */}
                                                <div className="w-12 h-full border-r border-white/[0.06] flex flex-col gap-3 items-center pt-2">
                                                    <div className="w-6 h-6 rounded bg-blue-500/20" />
                                                    <div className="w-6 h-6 rounded bg-white/[0.05]" />
                                                    <div className="w-6 h-6 rounded bg-white/[0.05]" />
                                                </div>

                                                {/* Main Area */}
                                                <div className="flex-1 flex flex-col gap-4">
                                                    <div className="flex gap-4">
                                                        <div className="flex-1 h-20 bg-white/[0.03] rounded border border-white/[0.05] p-3">
                                                            <div className="w-6 h-6 rounded bg-green-500/10 mb-2" />
                                                            <div className="w-12 h-2 bg-white/[0.1] rounded" />
                                                        </div>
                                                        <div className="flex-1 h-20 bg-white/[0.03] rounded border border-white/[0.05] p-3">
                                                            <div className="w-6 h-6 rounded bg-purple-500/10 mb-2" />
                                                            <div className="w-12 h-2 bg-white/[0.1] rounded" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 bg-white/[0.03] rounded border border-white/[0.05] relative overflow-hidden">
                                                        {/* Fake Chart */}
                                                        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-between px-4 pb-2 gap-1">
                                                            {[40, 60, 45, 70, 50, 80, 65, 90].map((h, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    initial={{ height: 0 }}
                                                                    whileInView={{ height: `${h}%` }}
                                                                    transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
                                                                    className="w-full bg-blue-500/20 rounded-t-sm border-t border-blue-500/50"
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <button className="px-5 py-2 bg-white text-black rounded-full font-semibold text-xs hover:scale-105 transition-transform shadow-xl">
                                                    View Interactive Demo
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 p-5 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                                            <div className="p-2 bg-blue-500/10 rounded-full text-blue-400 shrink-0">
                                                <User size={18} />
                                            </div>
                                            <div>
                                                <p className="text-white/80 italic mb-2 text-base leading-relaxed">"{tabs[activeTab].quote}"</p>
                                                <p className="text-sm text-white/40 font-semibold">{tabs[activeTab].author}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto grid grid-cols-2 gap-4">
                                        {tabs[activeTab].stats.map((stat, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="p-5 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200 group"
                                            >
                                                <div className="flex items-center gap-2 mb-1">
                                                    <CheckCircle2 size={14} className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="text-3xl font-bold text-white tabular-nums tracking-tight">
                                                        {stat.value}
                                                    </div>
                                                </div>
                                                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">
                                                    {stat.label}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
