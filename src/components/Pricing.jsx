import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: { monthly: 0, annual: 0 },
        description: "Perfect for testing the waters.",
        features: ["Real-time tracking (up to 50 shipments)", "Basic analytics", "Email support", "1 User seat"],
        cta: "Start Free",
        popular: false
    },
    {
        name: "Growth",
        price: { monthly: 499, annual: 399 },
        description: "For scaling operations.",
        features: ["Unlimited tracking", "Advanced predictive AI", "Priority support (24/7)", "5 User seats", "Custom API access"],
        cta: "Start Trial",
        popular: true
    },
    {
        name: "Enterprise",
        price: { monthly: "Custom", annual: "Custom" },
        description: "For global logistics networks.",
        features: ["Dedicated success manager", "Custom AI model training", "SLA guarantees", "Unlimited seats", "On-premise deployment option"],
        cta: "Contact Sales",
        popular: false
    }
];

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section id="pricing" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
                    <p className="text-lg text-white/60 mb-8">No hidden fees. Cancel anytime.</p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className="w-16 h-9 bg-white/10 rounded-full p-1 relative transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                animate={{ x: annual ? 24 : 0 }}
                                className="w-6 h-6 bg-white rounded-full shadow-lg"
                            />
                        </button>
                        <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-white/40'}`}>
                            Annual <span className="text-green-400 text-xs ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-3xl border ${plan.popular ? 'bg-white/5 border-blue-500/50' : 'bg-[#0A0A0A] border-white/10'} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-sm text-white/50 h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    {typeof plan.price.monthly === 'number' ? (
                                        <>
                                            <span className="text-4xl font-bold">$</span>
                                            <span className="text-5xl font-bold tracking-tight">
                                                {annual ? plan.price.annual : plan.price.monthly}
                                            </span>
                                            <span className="text-white/40">/mo</span>
                                        </>
                                    ) : (
                                        <span className="text-4xl font-bold">{plan.price.monthly}</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 mb-8 space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm text-white/70">
                                        <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                                ? 'bg-white text-black hover:scale-[1.02]'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
