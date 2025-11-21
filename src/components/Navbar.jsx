import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const updateScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const navLinks = ['Features', 'Solutions', 'Pricing', 'Docs'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'glass border-b border-white/[0.06]'
                : 'bg-transparent'
                }`}
            style={{
                backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
            }}
        >
            <div className="container">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <div className="w-3.5 h-3.5 bg-black rounded-full" />
                        </div>
                        <span className="text-[17px] font-bold tracking-[-0.02em]">OptiFlow AI</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="px-4 py-2 text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
                            >
                                {link}
                                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="hidden sm:block px-4 py-2 text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-200">
                            Log in
                        </button>
                        <button className="px-6 py-2.5 bg-white text-black rounded-full text-[14px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.1)] btn-shine">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
