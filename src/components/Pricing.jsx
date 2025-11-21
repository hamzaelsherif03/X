import React, { useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Check, Shield, Lock, Award, Sparkles } from 'lucide-react';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            monthlyPrice: 0,
            annualPrice: 0,
            description: "Free forever for small teams.",
            features: [
                "Up to 500 shipments/mo",
                "Real-time tracking",
                "Basic analytics",
                "Email support"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Pro",
            monthlyPrice: 499,
            annualPrice: 399,
            description: "For growing logistics operations.",
            features: [
                "Up to 10k shipments/mo",
                "Predictive delays",
                "Advanced reporting",
                "Priority support",
                "API Access",
                "Custom integrations"
            ],
            cta: "Start Free Trial",
            popular: true,
            badge: "Most Popular"
        },
        {
            name: "Enterprise",
            monthlyPrice: null,
            annualPrice: null,
            description: "For global supply chains.",
            features: [
                "Unlimited shipments",
                "Custom AI models",
                "Dedicated success manager",
                "SLA guarantees",
                "On-premise deployment",
                "24/7 phone support"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-black border-t border-white/[0.06] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
                    >
                        Simple, transparent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">pricing.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/60 mb-10"
                    >
                        Choose the plan that fits your scale. No hidden fees, no surprise charges.
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-1 p-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full backdrop-blur-sm"
                    >
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isAnnual
                                ? 'bg-white text-black shadow-[0_2px_10px_rgba(255,255,255,0.1)]'
                                : 'text-white/60 hover:text-white'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${isAnnual
                                ? 'bg-white text-black shadow-[0_2px_10px_rgba(255,255,255,0.1)]'
                                : 'text-white/60 hover:text-white'
                                }`}
                        >
                            Annual
                            <span className="text-[10px] font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">
                                -20%
                            </span>
                        </button>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                    {plans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} index={index} />
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-12 border-t border-white/[0.06]"
                >
                    {[
                        { icon: Shield, text: "SOC 2 Type II Certified" },
                        { icon: Lock, text: "GDPR & CCPA Compliant" },
                        { icon: Award, text: "ISO 27001 Security" }
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors duration-300 group cursor-default">
                            <div className="p-2 rounded-full bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors">
                                <badge.icon size={18} />
                            </div>
                            <span className="text-sm font-medium tracking-wide">{badge.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// Separate component for Spotlight effect
const PricingCard = ({ plan, isAnnual, index }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };
    const opacity = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        position.x.set(e.clientX - rect.left);
        position.y.set(e.clientY - rect.top);
    };

    const handleFocus = () => {
        setIsFocused(true);
        opacity.set(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        opacity.set(0);
    };

    const handleMouseEnter = () => {
        opacity.set(1);
    };

    const handleMouseLeave = () => {
        opacity.set(0);
    };

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-3xl border transition-all duration-300 group ${plan.popular
                ? 'bg-white/[0.02] border-blue-500/30'
                : 'bg-black border-white/[0.08]'
                }`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${position.x}px ${position.y}px,
              rgba(255,255,255,0.1),
              transparent 40%
            )
          `,
                }}
            />

            {/* Popular Badge */}
            {plan.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold px-4 py-1 rounded-b-lg shadow-[0_4px_12px_rgba(59,130,246,0.4)] tracking-widest uppercase z-20">
                    {plan.badge}
                </div>
            )}

            <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="mb-8 mt-2">
                    <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${plan.popular ? 'text-blue-400' : 'text-white'}`}>
                        {plan.name}
                        {plan.popular && <Sparkles size={14} className="animate-pulse" />}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-2">
                        <div className="text-5xl font-bold text-white tabular-nums tracking-tight">
                            {plan.monthlyPrice === null ? (
                                'Custom'
                            ) : plan.monthlyPrice === 0 ? (
                                '$0'
                            ) : (
                                <>
                                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                </>
                            )}
                        </div>
                        {plan.monthlyPrice !== null && (
                            <span className="text-lg text-white/40 font-normal">/mo</span>
                        )}
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                        <div className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded w-fit">
                            Save ${(plan.monthlyPrice - plan.annualPrice) * 12} yearly
                        </div>
                    )}
                    <p className="text-white/60 text-sm mt-4 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/80 text-sm group/item">
                                <div className={`mt-0.5 p-0.5 rounded-full ${plan.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-white/[0.1] text-white/60 group-hover/item:text-white group-hover/item:bg-white/[0.2]'} transition-colors`}>
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="leading-tight">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.popular
                    ? 'bg-white text-black hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.06] hover:border-white/[0.12]'
                    }`}>
                    {plan.cta}
                </button>
            </div>
        </motion.div>
    );
};

export default Pricing;
