import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
    // Logo data with SVG paths for realistic company logos
    const logos = [
        { name: "Acme", width: 120, height: 40 },
        { name: "GlobalTech", width: 140, height: 40 },
        { name: "Nebula", width: 110, height: 40 },
        { name: "Vertex", width: 130, height: 40 },
        { name: "Horizon", width: 125, height: 40 },
        { name: "Pinnacle", width: 135, height: 40 },
        { name: "Apex", width: 100, height: 40 },
        { name: "Summit", width: 120, height: 40 }
    ];

    return (
        <section className="py-20 bg-black border-b border-white/[0.06] overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full opacity-50" />
            </div>

            <div className="container mb-12 text-center relative z-10">
                <p className="text-sm font-semibold text-white/40 uppercase tracking-[0.2em]">
                    Trusted by logistics leaders worldwide
                </p>
            </div>

            {/* Logo Marquee */}
            <div className="relative flex overflow-hidden mb-20 group mask-gradient-x">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="relative px-6 py-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                            style={{ minWidth: '140px' }}
                        >
                            <svg
                                width={logo.width}
                                height={logo.height}
                                viewBox={`0 0 ${logo.width} ${logo.height}`}
                                className="fill-current text-white"
                            >
                                {/* Generic logo design using company name */}
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    className="font-bold"
                                    style={{ fontSize: '20px', letterSpacing: '-0.03em' }}
                                >
                                    {logo.name}
                                </text>
                                {/* Decorative element */}
                                <circle cx="10" cy="20" r="3" className="fill-blue-500" opacity="0.8" />
                            </svg>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="container relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/[0.06] pt-12">
                    {[
                        { label: "Data Points", value: "10B+", icon: "📊", color: "text-blue-400" },
                        { label: "Uptime SLA", value: "99.99%", icon: "⚡", color: "text-yellow-400" },
                        { label: "Countries", value: "150+", icon: "🌍", color: "text-green-400" },
                        { label: "ROI Average", value: "300%", icon: "📈", color: "text-purple-400" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group p-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300"
                        >
                            <div className={`text-2xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity ${stat.color} filter drop-shadow-lg`}>
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight tabular-nums">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/40 font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
