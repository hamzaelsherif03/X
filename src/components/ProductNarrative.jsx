import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Map, Zap, CheckCircle } from 'lucide-react';

const ProductNarrative = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-black">
            <div className="relative h-[400vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <div className="container relative w-full h-full flex items-center">

                        {/* Left: Text Content */}
                        <div className="w-full lg:w-1/2 relative z-10 h-full flex flex-col justify-center">
                            <NarrativeText
                                progress={scrollYProgress}
                                range={[0, 0.3]}
                                title="Real-time Visibility"
                                desc="Track every shipment across your global network with satellite precision. Detect anomalies before they become delays."
                            />
                            <NarrativeText
                                progress={scrollYProgress}
                                range={[0.3, 0.6]}
                                title="Predictive AI Models"
                                desc="Our neural networks analyze historical data and weather patterns to forecast disruptions with 94% accuracy."
                            />
                            <NarrativeText
                                progress={scrollYProgress}
                                range={[0.6, 0.9]}
                                title="Automated Resolution"
                                desc="When issues arise, OptiFlow automatically reroutes shipments and notifies stakeholders. Zero manual intervention."
                            />
                        </div>

                        {/* Right: Visuals */}
                        <div className="absolute inset-0 lg:relative lg:w-1/2 h-full flex items-center justify-center pl-0 lg:pl-24">
                            <div className="relative w-full max-w-xl aspect-square">

                                {/* Visual 1: Map View */}
                                <VisualCard progress={scrollYProgress} range={[0, 0.3]}>
                                    <div className="absolute inset-0 bg-black rounded-2xl border border-white/[0.06] overflow-hidden shadow-umbra">
                                        <div className="absolute inset-0 opacity-20" style={{
                                            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                            backgroundSize: '24px 24px'
                                        }}></div>

                                        {/* Pulse Rings */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            {[1, 2, 3].map((i) => (
                                                <div
                                                    key={i}
                                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-500/30 rounded-full"
                                                    style={{
                                                        width: `${i * 120}px`,
                                                        height: `${i * 120}px`,
                                                        animation: `pulse-ring 2s ease-out infinite ${i * 0.3}s`
                                                    }}
                                                />
                                            ))}
                                            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]" />
                                        </div>

                                        {/* Location Pins */}
                                        {[
                                            { top: '20%', left: '30%', label: 'LAX' },
                                            { top: '40%', right: '25%', label: 'JFK' },
                                            { top: '70%', left: '50%', label: 'MIA' }
                                        ].map((pin, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: i * 0.2, duration: 0.4 }}
                                                className="absolute w-2 h-2 bg-white rounded-full"
                                                style={{ top: pin.top, left: pin.left, right: pin.right }}
                                            >
                                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/60 whitespace-nowrap">
                                                    {pin.label}
                                                </div>
                                            </motion.div>
                                        ))}

                                        {/* Floating Card */}
                                        <motion.div
                                            initial={{ x: 20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            className="absolute top-10 right-10 bg-black/90 backdrop-blur-md border border-white/[0.12] p-4 rounded-xl shadow-penumbra"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                                    <Map size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/40">Shipment #8492</div>
                                                    <div className="text-sm font-semibold text-white">In Transit • On Time</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </VisualCard>

                                {/* Visual 2: AI Prediction */}
                                <VisualCard progress={scrollYProgress} range={[0.3, 0.6]}>
                                    <div className="absolute inset-0 bg-black rounded-2xl border border-white/[0.06] overflow-hidden shadow-umbra flex flex-col p-8">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-2">
                                                <Zap className="text-yellow-400" size={20} />
                                                <span className="font-semibold text-white">Risk Analysis</span>
                                            </div>
                                            <span className="text-xs bg-red-500/10 text-red-400 px-3 py-1 rounded-full font-semibold border border-red-500/20">
                                                High Risk Detected
                                            </span>
                                        </div>

                                        <div className="space-y-6">
                                            {[
                                                { label: 'Weather Impact', value: 85, color: 'red' },
                                                { label: 'Port Congestion', value: 45, color: 'yellow' },
                                                { label: 'Fuel Availability', value: 20, color: 'green' }
                                            ].map((risk, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.15 }}
                                                    className="p-5 bg-white/[0.02] rounded-xl border border-white/[0.06]"
                                                >
                                                    <div className="flex justify-between text-sm mb-3">
                                                        <span className="text-white/60">{risk.label}</span>
                                                        <span className={`font-semibold ${risk.color === 'red' ? 'text-red-400' :
                                                            risk.color === 'yellow' ? 'text-yellow-400' :
                                                                'text-green-400'
                                                            }`}>
                                                            {risk.value > 70 ? 'Critical' : risk.value > 40 ? 'Moderate' : 'Low'}
                                                        </span>
                                                    </div>
                                                    <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${risk.value}%` }}
                                                            transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
                                                            className={`h-full rounded-full ${risk.color === 'red' ? 'bg-red-500' :
                                                                risk.color === 'yellow' ? 'bg-yellow-500' :
                                                                    'bg-green-500'
                                                                }`}
                                                        />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </VisualCard>

                                {/* Visual 3: Automated Resolution */}
                                <VisualCard progress={scrollYProgress} range={[0.6, 0.9]}>
                                    <div className="absolute inset-0 bg-black rounded-2xl border border-white/[0.06] overflow-hidden shadow-umbra p-8 flex flex-col justify-center items-center text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8 text-green-400 border border-green-500/30"
                                        >
                                            <CheckCircle size={40} />
                                        </motion.div>

                                        <h3 className="text-3xl font-bold text-white mb-3">Route Optimized</h3>
                                        <p className="text-white/60 mb-10 max-w-sm">
                                            Saved 4.5 hours and $1,200 in fuel costs.
                                        </p>

                                        <div className="w-full max-w-md bg-white/[0.02] rounded-xl p-6 border border-white/[0.06] text-left">
                                            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                                                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                                                <span className="text-sm text-white/40 line-through">Original Route (Blocked)</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                                                <span className="text-sm text-white font-semibold">New Route (Active)</span>
                                            </div>
                                        </div>
                                    </div>
                                </VisualCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const NarrativeText = ({ progress, range, title, desc }) => {
    const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0, 1, 1, 0]);
    const y = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [40, 0, 0, -40]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute top-[25%] -translate-y-1/2 left-0 max-w-lg p-8"
        >
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
                {title}
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
};

const VisualCard = ({ children, progress, range }) => {
    const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0, 1, 1, 0]);
    const scale = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0.98, 1, 1, 0.98]);

    return (
        <motion.div
            style={{ opacity, scale }}
            className="absolute inset-0"
        >
            {children}
        </motion.div>
    );
};

export default ProductNarrative;
