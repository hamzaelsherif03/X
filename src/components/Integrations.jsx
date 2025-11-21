import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, Zap, GitBranch, Database, Lock, ArrowRight, Check, Copy } from 'lucide-react';

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden relative group ${className}`}
    >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {children}
    </motion.div>
);

const Integrations = () => {
    return (
        <section id="integrations" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Integration</h2>
                    <p className="text-lg text-white/60">Connect OptiFlow with your existing stack. We support 50+ major ERPs, carriers, and financial systems out of the box.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Card 1: Unified Data Layer (Large Visual) */}
                    <BentoCard className="row-span-2 md:col-span-2 md:row-span-2 p-0 flex flex-col bg-gradient-to-br from-blue-900/10 to-transparent relative overflow-hidden">
                        <div className="p-10 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                <Layers className="text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Unified Data Layer</h3>
                            <p className="text-white/60 max-w-md">Pull data from SAP, Oracle, and NetSuite into a single source of truth. No more siloed spreadsheets.</p>
                        </div>

                        {/* Visualization */}
                        <div className="absolute inset-0 mt-32 flex items-center justify-center">
                            {/* Central Hub */}
                            <div className="relative z-10 w-24 h-24 rounded-full bg-[#0A0A0A] border border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[ping_3s_linear_infinite]" />
                                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                                    <Database className="text-white" size={32} />
                                </div>
                            </div>

                            {/* Orbiting Nodes */}
                            {[
                                { name: "SAP", angle: 0, color: "bg-blue-400" },
                                { name: "Oracle", angle: 72, color: "bg-red-400" },
                                { name: "FedEx", angle: 144, color: "bg-purple-400" },
                                { name: "Maersk", angle: 216, color: "bg-cyan-400" },
                                { name: "Salesforce", angle: 288, color: "bg-indigo-400" }
                            ].map((node, i) => (
                                <div key={i} className="absolute w-[300px] h-[300px] animate-[spin_20s_linear_infinite]" style={{ animationDelay: `-${i * 4}s` }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="relative group/node">
                                            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-xl z-10 relative">
                                                <div className={`w-3 h-3 rounded-full ${node.color}`} />
                                            </div>
                                            {/* Connector Line */}
                                            <div className="absolute top-1/2 left-1/2 w-px h-[150px] bg-gradient-to-b from-white/20 to-transparent origin-top rotate-180" />
                                            {/* Moving Particle */}
                                            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-[drop_2s_linear_infinite]" style={{ animationDelay: `${i * 0.5}s` }} />

                                            {/* Label */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-white/40 uppercase tracking-wider whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity">
                                                {node.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Card 2: Instant Sync */}
                    <BentoCard className="p-8 flex flex-col justify-center relative overflow-hidden" delay={0.1}>
                        <div className="absolute top-0 right-0 p-32 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none" />
                        <Zap className="w-10 h-10 text-yellow-500 mb-6 relative z-10" />
                        <h3 className="text-xl font-bold mb-2 relative z-10">Instant Sync</h3>
                        <p className="text-sm text-white/50 relative z-10">Real-time bi-directional sync with <span className="text-white">99.9% uptime SLA</span>.</p>

                        {/* Pulse Effect */}
                        <div className="absolute bottom-4 right-4 flex gap-1">
                            <div className="w-1 h-4 bg-yellow-500/20 rounded-full animate-pulse" />
                            <div className="w-1 h-6 bg-yellow-500/40 rounded-full animate-pulse delay-75" />
                            <div className="w-1 h-3 bg-yellow-500/20 rounded-full animate-pulse delay-150" />
                        </div>
                    </BentoCard>

                    {/* Card 3: Security */}
                    <BentoCard className="p-8 flex flex-col justify-center relative overflow-hidden" delay={0.2}>
                        <div className="absolute top-0 right-0 p-32 bg-green-500/10 blur-[80px] rounded-full pointer-events-none" />
                        <Lock className="w-10 h-10 text-green-500 mb-6 relative z-10" />
                        <h3 className="text-xl font-bold mb-2 relative z-10">Enterprise Security</h3>
                        <p className="text-sm text-white/50 relative z-10">SOC2 Type II certified. End-to-end encryption for all data in transit.</p>

                        <div className="absolute bottom-4 right-4">
                            <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-500">ENCRYPTED</div>
                        </div>
                    </BentoCard>

                    {/* Card 4: API First */}
                    <BentoCard className="md:col-span-3 p-0 flex flex-col md:flex-row items-center bg-white/[0.02]" delay={0.3}>
                        <div className="p-8 md:p-12 max-w-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                    <GitBranch className="text-purple-500" size={20} />
                                </div>
                                <h3 className="text-xl font-bold">Developer First API</h3>
                            </div>
                            <p className="text-sm text-white/50 mb-8 leading-relaxed">
                                Build custom workflows with our robust GraphQL API. Comprehensive documentation, typed SDKs, and webhooks for every event.
                            </p>
                            <button className="text-sm font-semibold text-white flex items-center gap-2 hover:gap-3 transition-all group">
                                Read the Docs <ArrowRight size={16} className="text-purple-500" />
                            </button>
                        </div>

                        {/* Code Snippet */}
                        <div className="flex-1 w-full h-full min-h-[250px] bg-[#050505] border-l border-white/10 relative font-mono text-xs overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                </div>
                                <div className="text-white/30 text-[10px]">POST /graphql</div>
                            </div>

                            <div className="p-6 pt-14 text-blue-300 overflow-x-auto">
                                <div><span className="text-purple-400">query</span> <span className="text-yellow-300">GetShipment</span>($id: ID!) {'{'}</div>
                                <div className="pl-4 text-white">shipment(id: $id) {'{'}</div>
                                <div className="pl-8 text-cyan-300">id</div>
                                <div className="pl-8 text-cyan-300">status</div>
                                <div className="pl-8 text-cyan-300">currentLocation {'{'}</div>
                                <div className="pl-12 text-cyan-300">lat</div>
                                <div className="pl-12 text-cyan-300">lng</div>
                                <div className="pl-8 text-white">{'}'}</div>
                                <div className="pl-8 text-cyan-300">estimatedDelivery</div>
                                <div className="pl-4 text-white">{'}'}</div>
                                <div>{'}'}</div>
                            </div>

                            <div className="absolute top-14 right-4">
                                <button className="p-2 rounded hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                                    <Copy size={14} />
                                </button>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
