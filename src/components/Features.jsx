import React from 'react';
import { motion } from 'framer-motion';
import { Share2, ShieldCheck, Zap, Layers, ArrowUpRight, Activity, Lock, Globe, TrendingUp } from 'lucide-react';

const Features = () => {
    return (
        <section className="py-24 bg-black border-t border-white/[0.06] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full" />
            </div>

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight"
                    >
                        Everything you need to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">scale globally.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60"
                    >
                        A complete suite of logistics tools designed for the modern enterprise.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
                    {/* Large Card 1 - Network Optimization */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="md:col-span-2 rounded-3xl bg-white/[0.02] border border-white/[0.06] overflow-hidden relative group hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 h-full flex flex-col z-10 relative">
                            <div className="mb-auto">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                                        <Share2 size={20} />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-[10px] font-medium text-white/60 group-hover:text-white transition-colors uppercase tracking-wider">
                                        Real-time
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Global Network Optimization</h3>
                                <p className="text-white/60 max-w-md leading-relaxed text-base">
                                    Visualize your entire supply chain in real-time. Identify bottlenecks and optimize routes instantly.
                                </p>
                            </div>

                            {/* Enhanced Network Visualization */}
                            <div className="mt-6 h-56 bg-black/40 rounded-xl border border-white/[0.06] overflow-hidden relative shadow-inner group-hover:border-white/[0.1] transition-colors">
                                <div className="absolute inset-0 opacity-20" style={{
                                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                                    backgroundSize: '24px 24px'
                                }}></div>

                                {/* Animated Connection Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                                            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        d="M 80 180 Q 200 60 350 140 T 600 100"
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                    <motion.path
                                        d="M 120 120 Q 250 200 400 80 T 550 160"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />
                                </svg>

                                {/* Interactive Nodes */}
                                {[
                                    { x: '15%', y: '70%', label: 'LAX' },
                                    { x: '50%', y: '45%', label: 'ORD' },
                                    { x: '85%', y: '30%', label: 'JFK' }
                                ].map((pos, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: i * 0.2, type: "spring" }}
                                        className="absolute group/node cursor-pointer"
                                        style={{ left: pos.x, top: pos.y }}
                                    >
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10 relative group-hover/node:scale-125 transition-transform duration-200" />
                                            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping" />
                                            <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-black/90 px-2 py-1 rounded text-[10px] font-mono text-white border border-white/[0.1] opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap z-20">
                                                {pos.label} • Active
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tall Card - Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="md:row-span-2 rounded-3xl bg-white/[0.02] border border-white/[0.06] overflow-hidden relative group hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 h-full flex flex-col z-10 relative">
                            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Instant Analytics</h3>
                            <p className="text-white/60 mb-8 leading-relaxed text-sm">
                                Real-time reporting on every metric that matters.
                            </p>

                            <div className="flex-1 bg-black/40 rounded-xl border border-white/[0.06] p-4 space-y-3 relative overflow-hidden group-hover:border-white/[0.1] transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50" />

                                {[
                                    { label: 'Revenue', value: '$2.4M', change: '+12%', icon: Activity },
                                    { label: 'Shipments', value: '1,284', change: '+8%', icon: Globe },
                                    { label: 'Efficiency', value: '94%', change: '+3%', icon: Zap },
                                    { label: 'Savings', value: '$180K', change: '+15%', icon: TrendingUp }
                                ].map((metric, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200 group/item cursor-default"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-1.5 rounded-md bg-white/[0.04] text-white/40 group-hover/item:text-white group-hover/item:bg-white/[0.08] transition-colors">
                                                <metric.icon size={14} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-white/40 mb-0.5">{metric.label}</div>
                                                <div className="text-sm font-bold text-white tabular-nums">{metric.value}</div>
                                            </div>
                                        </div>
                                        <div className="text-[10px] font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                                            {metric.change}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Floating action button simulation */}
                                <div className="absolute bottom-4 right-4">
                                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 hover:scale-110 transition-transform cursor-pointer">
                                        <ArrowUpRight className="text-white" size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Card - Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="rounded-3xl bg-white/[0.02] border border-white/[0.06] overflow-hidden relative group p-8 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Enterprise Security</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                SOC2 Type II certified. End-to-end encryption for all your data.
                            </p>

                            <div className="flex items-center gap-2 text-[10px] font-mono text-green-400 bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20 w-fit">
                                <Lock size={12} />
                                <span>AES-256 ENCRYPTED</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Card - Integration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3 }}
                        className="rounded-3xl bg-white/[0.02] border border-white/[0.06] overflow-hidden relative group p-8 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                                <Layers size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Seamless Integration</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                Connect with SAP, Oracle, and NetSuite in minutes.
                            </p>

                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-7 h-7 rounded-full bg-white/[0.1] border border-black flex items-center justify-center text-[9px] text-white font-bold">
                                        API
                                    </div>
                                ))}
                                <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-black flex items-center justify-center text-[9px] text-white/60">
                                    +20
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div >
            </div >
        </section >
    );
};

export default Features;
