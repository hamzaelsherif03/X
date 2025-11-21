import React from 'react';
import { motion } from 'framer-motion';

import maerskLogo from '../assets/logos/maersk.svg';
import dhlLogo from '../assets/logos/dhl.svg';
import fedexLogo from '../assets/logos/fedex.svg';
import shopifyLogo from '../assets/logos/shopify.svg';
import walmartLogo from '../assets/logos/walmart.svg';
import siemensLogo from '../assets/logos/siemens.svg';

const Trust = () => {
    const logos = [
        maerskLogo,
        dhlLogo,
        fedexLogo,
        shopifyLogo,
        walmartLogo,
        siemensLogo
    ];

    return (
        <section className="py-12 md:py-20 bg-[#050505] border-b border-white/5">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-medium text-white/40 mb-8 md:mb-12 tracking-widest uppercase">
                    Trusted by forward-thinking companies
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            src={logo}
                            alt="Brand Logo"
                            className="h-8 md:h-10 w-auto object-contain brightness-0 invert hover:brightness-100 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
