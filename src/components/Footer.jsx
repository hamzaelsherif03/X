import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/[0.06] pt-24 pb-12 relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-[0.03] pointer-events-none">
                <h1 className="text-[20vw] font-bold text-white whitespace-nowrap tracking-tighter select-none">
                    OPTIFLOW
                </h1>
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand & Newsletter */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                <Globe size={16} className="text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">OptiFlow AI</span>
                        </div>
                        <p className="text-white/40 text-base max-w-sm leading-relaxed mb-8">
                            Predictive logistics intelligence for the modern enterprise.
                            Optimize routes, reduce costs, and scale globally.
                        </p>

                        <div className="max-w-sm">
                            <h5 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h5>
                            <div className="flex gap-2 relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300"
                                />
                                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black px-4 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors shadow-lg">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-white/20 mt-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                                Join 12,000+ logistics leaders. No spam, ever.
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="font-bold mb-6 text-white">Product</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            {['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit">
                                        {item}
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            {['About', 'Careers', 'Blog', 'Contact', 'Partners'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit">
                                        {item}
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-6 text-white">Legal</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            {['Privacy', 'Terms', 'Security', 'Status'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit">
                                        {item}
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.06] text-sm text-white/30">
                    <div>&copy; 2025 OptiFlow AI Inc. All rights reserved.</div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                            <a key={i} href="#" className="p-2 rounded-full bg-white/[0.02] hover:bg-white/[0.1] hover:text-white transition-all duration-200 border border-transparent hover:border-white/[0.1]">
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
