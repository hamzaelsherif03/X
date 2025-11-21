import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Target, Zap } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Data Ingestion",
        desc: "Seamlessly connect your ERP, WMS, and fleet data sources via our secure, high-throughput API connectors.",
        icon: Database,
        gradient: "from-blue-500 to-cyan-500",
        color: "bg-blue-500"
    },
    {
        number: "02",
        title: "AI Simulation",
        desc: "Our proprietary engine runs millions of scenario simulations in parallel to identify optimal operational paths.",
        icon: Brain,
        gradient: "from-purple-500 to-pink-500",
        color: "bg-purple-500"
    },
    {
        number: "03",
        title: "Strategic Optimization",
        desc: "Receive actionable, ranked recommendations designed to maximize efficiency and minimize costs.",
        icon: Target,
        gradient: "from-orange-500 to-red-500",
        color: "bg-orange-500"
    },
    {
        number: "04",
        title: "Automated Execution",
        desc: "Implement decisions instantly with automated dispatching and real-time fleet communication.",
        icon: Zap,
        gradient: "from-green-500 to-emerald-500",
        color: "bg-green-500"
    }
];

const Process = () => {
    return (
        <section className="relative py-24 bg-black">
            <div className="container max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                    >
                        From Data to Decision
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        Our AI-powered platform transforms your logistics operations in four seamless steps
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-2xl">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-[0.05]`} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        {/* Icon + Number */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="relative">
                                                <div className={`absolute inset-0 ${step.color} opacity-20 blur-xl rounded-full`} />
                                                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} p-[2px]`}>
                                                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                                                        <Icon className="w-7 h-7 text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-5xl font-bold text-white/[0.05] group-hover:text-white/[0.08] transition-colors">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-2xl font-bold mb-3 tracking-tight bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/60 leading-relaxed">
                                            {step.desc}
                                        </p>

                                        {/* Step Label */}
                                        <div className="mt-4 pt-4 border-t border-white/[0.06]">
                                            <span className="text-xs font-mono text-white/30 tracking-wider">
                                                STEP {step.number}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector Line (for visual flow) */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
