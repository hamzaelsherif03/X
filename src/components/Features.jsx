import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, Globe, ShieldCheck, Zap } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "Predictive Analytics",
        description: "Forecast demand with 99% accuracy using our proprietary neural networks. Anticipate market shifts before they happen.",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-500",
        stats: [
            { label: "Accuracy", value: "99.2%" },
            { label: "Processing", value: "<50ms" }
        ]
    },
    {
        id: 2,
        title: "Global Real-time Tracking",
        description: "Monitor every shipment across air, sea, and land in real-time. Get instant alerts on delays or route deviations.",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
        stats: [
            { label: "Coverage", value: "190+ Countries" },
            { label: "Updates", value: "Real-time" }
        ]
    },
    {
        id: 3,
        title: "Automated Compliance",
        description: "Navigate complex customs regulations automatically. Generate compliant documentation for any jurisdiction instantly.",
        icon: ShieldCheck,
        color: "from-amber-500 to-orange-500",
        stats: [
            { label: "Compliance", value: "100%" },
            { label: "Docs/min", value: "500+" }
        ]
    }
];

const FeatureCard = ({ feature, i }) => {
    return (
        <div className="min-h-screen md:h-screen flex items-center justify-center relative md:sticky md:top-0 bg-[#050505] overflow-hidden py-12 md:py-0">
            <div className="relative w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg`}>
                        <feature.icon className="text-white w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{feature.title}</h2>
                    <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-md">
                        {feature.description}
                    </p>

                    <div className="flex gap-8 border-t border-white/10 pt-8">
                        {feature.stats.map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Content */}
                <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-[0.03]`} />

                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Content Container */}
                    <div className="absolute inset-0 p-8 md:p-12 flex items-center justify-center">

                        {/* Feature 1: Predictive Analytics */}
                        {feature.id === 1 && (
                            <div className="w-full h-full flex flex-col relative">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="text-sm font-medium text-white/60">Demand Forecast</div>
                                        <div className="text-2xl font-bold text-white">Q4 Projections</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-medium">AI Confidence: 99.2%</div>
                                    </div>
                                </div>

                                {/* Chart Area */}
                                <div className="flex-1 relative border-l border-b border-white/10">
                                    {/* Grid Lines */}
                                    {[0, 1, 2, 3].map(n => (
                                        <div key={n} className="absolute w-full h-px bg-white/5" style={{ bottom: `${n * 25}%` }} />
                                    ))}

                                    {/* Chart Path */}
                                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        {/* Historical Data */}
                                        <path d="M0,250 L50,240 L100,260 L150,200 L200,220 L250,180" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M0,250 L50,240 L100,260 L150,200 L200,220 L250,180 V300 H0 Z" fill="url(#chartGradient)" />

                                        {/* Predicted Data (Dashed) */}
                                        <path d="M250,180 L300,150 L350,160 L400,100 L450,80" fill="none" stroke="#60A5FA" strokeWidth="3" strokeDasharray="6 6" />

                                        {/* Points */}
                                        <circle cx="250" cy="180" r="4" fill="#3B82F6" stroke="#0A0A0A" strokeWidth="2" />
                                        <circle cx="450" cy="80" r="4" fill="#60A5FA" stroke="#0A0A0A" strokeWidth="2" />
                                    </svg>

                                    {/* Floating Tooltip */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute top-[20%] right-[10%] bg-[#1A1A1A] border border-white/10 p-3 rounded-lg shadow-xl"
                                    >
                                        <div className="text-xs text-white/60 mb-1">Predicted Spike</div>
                                        <div className="text-lg font-bold text-green-400">+24.5%</div>
                                    </motion.div>
                                </div>
                            </div>
                        )}

                        {/* Feature 2: Global Tracking */}
                        {feature.id === 2 && (
                            <div className="w-full h-full relative">
                                {/* Map Background */}
                                <div className="absolute inset-0 opacity-30">
                                    <svg className="w-full h-full">
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.1" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>

                                {/* Route Line */}
                                <svg className="absolute inset-0 w-full h-full overflow-visible">
                                    <path d="M100,400 Q250,200 500,150" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_3s_linear_infinite]" />
                                    <circle cx="100" cy="400" r="6" fill="#8B5CF6" className="animate-pulse" />
                                    <circle cx="500" cy="150" r="6" fill="#EC4899" />
                                </svg>

                                {/* Shipment Card */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 bg-[#1A1A1A]/90 backdrop-blur border border-white/10 rounded-xl p-3 md:p-4 shadow-2xl mx-4"
                                >
                                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                                            <Globe size={18} className="md:w-5 md:h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] md:text-xs text-white/60">Shipment ID</div>
                                            <div className="text-xs md:text-sm font-bold text-white">#SHP-8921</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <div className="flex justify-between text-[10px] md:text-xs">
                                            <span className="text-white/40">Origin</span>
                                            <span className="text-white">Shanghai</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] md:text-xs">
                                            <span className="text-white/40">Destination</span>
                                            <span className="text-white">Los Angeles</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[70%] bg-gradient-to-r from-purple-500 to-pink-500" />
                                        </div>
                                        <div className="flex justify-between items-center pt-1">
                                            <span className="text-[10px] md:text-xs font-medium text-green-400">On Schedule</span>
                                            <span className="text-[10px] md:text-xs text-white/40">ETA: 2 Days</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}

                        {/* Feature 3: Automated Compliance */}
                        {feature.id === 3 && (
                            <div className="w-full max-w-md mx-auto relative">
                                {/* Document Scanner UI */}
                                <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden relative">
                                    {/* Scanning Beam */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)] z-20 animate-[scan_3s_ease-in-out_infinite]" />

                                    <div className="p-6 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                                                    <ShieldCheck size={16} className="text-white" />
                                                </div>
                                                <div className="text-sm font-medium text-white">Commercial Invoice.pdf</div>
                                            </div>
                                            <span className="text-xs text-green-400 font-mono">VERIFIED</span>
                                        </div>

                                        <div className="space-y-3">
                                            {[
                                                { label: "HS Code Classification", status: "Match Found", color: "text-green-400" },
                                                { label: "Value Declaration", status: "Verified", color: "text-green-400" },
                                                { label: "Origin Certificate", status: "Valid", color: "text-green-400" },
                                                { label: "Restricted Items", status: "None Detected", color: "text-blue-400" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                                    <span className="text-xs text-white/60">{item.label}</span>
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${item.color === 'text-green-400' ? 'bg-green-500' : 'bg-blue-500'}`} />
                                                        <span className={`text-xs font-medium ${item.color}`}>{item.status}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Success Badge */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -10 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -bottom-6 -right-6 bg-green-500 text-black font-bold px-6 py-3 rounded-full shadow-xl flex items-center gap-2"
                                >
                                    <ShieldCheck size={18} />
                                    <span>Compliance 100%</span>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-12 md:py-0 bg-[#050505] relative">
            {features.map((feature, i) => (
                <FeatureCard key={feature.id} feature={feature} i={i} />
            ))}
        </section>
    );
};

export default Features;
