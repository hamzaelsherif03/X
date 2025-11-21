import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, AlertTriangle, ArrowRight } from 'lucide-react';

const industries = [
    { name: 'E-commerce', delayMultiplier: 1.2, churnRate: 0.15 },
    { name: 'Manufacturing', delayMultiplier: 1.5, churnRate: 0.12 },
    { name: 'Retail', delayMultiplier: 1.1, churnRate: 0.18 },
    { name: 'Logistics', delayMultiplier: 1.3, churnRate: 0.10 },
    { name: 'Pharma', delayMultiplier: 2.0, churnRate: 0.08 },
];

const CostCalculator = () => {
    const [shipments, setShipments] = useState(1000);
    const [avgValue, setAvgValue] = useState(5000);
    const [delayRate, setDelayRate] = useState(15);
    const [industry, setIndustry] = useState(industries[0]);
    const [animatedCost, setAnimatedCost] = useState(0);

    // Calculate costs
    const delayedShipments = (shipments * 12 * delayRate) / 100;
    const lostRevenue = delayedShipments * avgValue * industry.delayMultiplier * 0.3; // 30% stockout impact
    const penaltyFees = delayedShipments * 150; // Avg $150 per delayed shipment
    const customerChurn = delayedShipments * avgValue * industry.churnRate;
    const totalAnnualCost = lostRevenue + penaltyFees + customerChurn;

    // Animate the total cost counter
    useEffect(() => {
        const duration = 1000; // 1 second animation
        const steps = 60;
        const increment = totalAnnualCost / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= totalAnnualCost) {
                setAnimatedCost(totalAnnualCost);
                clearInterval(timer);
            } else {
                setAnimatedCost(current);
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [totalAnnualCost]);

    const formatCurrency = (value) => {
        if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(2)}M`;
        }
        return `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    };

    const costPerSecond = totalAnnualCost / (365 * 24 * 60 * 60);

    return (
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <DollarSign size={14} className="text-white/60" />
                        <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Cost Analysis</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Quantify Your Hidden Costs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 leading-relaxed"
                    >
                        Industry-standard model for estimating supply chain inefficiency costs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Calculator Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Monthly Shipments */}
                        <div>
                            <div className="flex justify-between mb-3">
                                <label className="text-sm font-medium text-white/80">Monthly Shipments</label>
                                <span className="text-sm font-bold text-white">{shipments.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="10000"
                                step="100"
                                value={shipments}
                                onChange={(e) => setShipments(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                            />
                            <div className="flex justify-between text-xs text-white/40 mt-1">
                                <span>100</span>
                                <span>10,000+</span>
                            </div>
                        </div>

                        {/* Average Shipment Value */}
                        <div>
                            <label className="text-sm font-medium text-white/80 mb-3 block">Average Shipment Value</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">$</span>
                                <input
                                    type="number"
                                    value={avgValue}
                                    onChange={(e) => setAvgValue(Number(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pl-8 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                    placeholder="5000"
                                />
                            </div>
                        </div>

                        {/* Current Delay Rate */}
                        <div>
                            <div className="flex justify-between mb-3">
                                <label className="text-sm font-medium text-white/80">Current Delay Rate</label>
                                <span className="text-sm font-bold text-red-400">{delayRate}%</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="40"
                                step="1"
                                value={delayRate}
                                onChange={(e) => setDelayRate(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                            />
                            <div className="flex justify-between text-xs text-white/40 mt-1">
                                <span>5%</span>
                                <span>40%</span>
                            </div>
                        </div>

                        {/* Industry Selection */}
                        <div>
                            <label className="text-sm font-medium text-white/80 mb-3 block">Industry</label>
                            <div className="grid grid-cols-2 gap-2">
                                {industries.map((ind) => (
                                    <button
                                        key={ind.name}
                                        onClick={() => setIndustry(ind)}
                                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${industry.name === ind.name
                                            ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                                            : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                                            }`}
                                    >
                                        {ind.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Cost Display */}
                        <div className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                            <div className="mb-4">
                                <span className="text-sm font-medium text-white/40 uppercase tracking-wider">Estimated Annual Impact</span>
                            </div>

                            <motion.div
                                key={animatedCost}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight font-mono"
                            >
                                {formatCurrency(animatedCost)}
                            </motion.div>

                            {/* Cost Breakdown */}
                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm text-white/60">Stockout Impact</span>
                                    <span className="text-base font-mono text-white">{formatCurrency(lostRevenue)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm text-white/60">Late Delivery Penalties</span>
                                    <span className="text-base font-mono text-white">{formatCurrency(penaltyFees)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-sm text-white/60">Retention Loss</span>
                                    <span className="text-base font-mono text-white">{formatCurrency(customerChurn)}</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="w-full bg-white text-black font-semibold py-4 rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                                Request Analysis
                                <ArrowRight size={16} />
                            </button>

                            {/* Methodology Note */}
                            <div className="mt-6 text-xs text-white/30 text-center">
                                Based on industry averages for {industry.name} sector
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Methodology Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <details className="group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        <summary className="cursor-pointer list-none flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">Calculation Methodology</h3>
                            <svg className="w-5 h-5 text-white/60 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <div className="mt-6 space-y-6 text-white/60 text-sm leading-relaxed">
                            {/* Formula 1 */}
                            <div className="border-l-2 border-blue-500/30 pl-4">
                                <div className="font-mono text-xs text-white/40 mb-2">1. Annual Delayed Shipments</div>
                                <code className="text-blue-400 text-xs">
                                    (Monthly Shipments × 12) × Delay Rate
                                </code>
                            </div>

                            {/* Formula 2 */}
                            <div className="border-l-2 border-purple-500/30 pl-4">
                                <div className="font-mono text-xs text-white/40 mb-2">2. Stockout Impact</div>
                                <code className="text-purple-400 text-xs block mb-3">
                                    Delayed Shipments × Avg Value × Industry Multiplier × 30%
                                </code>
                                <div className="text-xs text-white/40">
                                    <span className="font-semibold text-white/60">Industry Multipliers:</span>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div>• Pharma: <span className="text-white">2.0×</span> (critical impact)</div>
                                        <div>• Manufacturing: <span className="text-white">1.5×</span></div>
                                        <div>• Logistics: <span className="text-white">1.3×</span></div>
                                        <div>• E-commerce: <span className="text-white">1.2×</span></div>
                                        <div>• Retail: <span className="text-white">1.1×</span> (substitutable)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Formula 3 */}
                            <div className="border-l-2 border-green-500/30 pl-4">
                                <div className="font-mono text-xs text-white/40 mb-2">3. Late Delivery Penalties</div>
                                <code className="text-green-400 text-xs">
                                    Delayed Shipments × $150/shipment
                                </code>
                                <div className="text-xs text-white/40 mt-2">Industry average penalty cost</div>
                            </div>

                            {/* Formula 4 */}
                            <div className="border-l-2 border-orange-500/30 pl-4">
                                <div className="font-mono text-xs text-white/40 mb-2">4. Retention Loss</div>
                                <code className="text-orange-400 text-xs block mb-3">
                                    Delayed Shipments × Avg Value × Industry Churn Rate
                                </code>
                                <div className="text-xs text-white/40">
                                    <span className="font-semibold text-white/60">Churn Rates:</span>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div>• Retail: <span className="text-white">18%</span> (highest)</div>
                                        <div>• E-commerce: <span className="text-white">15%</span></div>
                                        <div>• Manufacturing: <span className="text-white">12%</span></div>
                                        <div>• Logistics: <span className="text-white">10%</span></div>
                                        <div>• Pharma: <span className="text-white">8%</span> (regulated)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="border-l-2 border-white/30 pl-4 pt-4 border-t border-white/10">
                                <div className="font-mono text-xs text-white/40 mb-2">Total Annual Impact</div>
                                <code className="text-white text-xs">
                                    Stockout Impact + Penalties + Retention Loss
                                </code>
                            </div>

                            <p className="text-xs text-white/30 italic pt-4">
                                Note: Multipliers and rates are based on industry research and may vary by specific use case.
                            </p>
                        </div>
                    </details>
                </motion.div>
            </div>
        </section>
    );
};

export default CostCalculator;
