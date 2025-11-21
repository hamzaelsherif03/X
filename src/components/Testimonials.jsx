import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "OptiFlow completely transformed our logistics. We reduced shipping delays by 40% in the first quarter alone.",
        author: "Sarah Chen",
        role: "VP of Operations",
        company: "TechGlobal",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
    },
    {
        quote: "The predictive AI is not a gimmick. It actually works. It saved us millions during the last holiday season.",
        author: "Marcus Rodriguez",
        role: "Supply Chain Director",
        company: "RetailCorp",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
    },
    {
        quote: "Finally, a platform that feels like modern software. The UX is incredible and the team loves using it.",
        author: "Emily Watson",
        role: "CTO",
        company: "LogiTech",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 md:py-32 bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-20">Loved by industry leaders</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <div className="font-semibold">{t.author}</div>
                                    <div className="text-sm text-white/40">{t.role}, {t.company}</div>
                                </div>
                            </div>
                            <p className="text-lg text-white/80 leading-relaxed">"{t.quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
