import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import ProductNarrative from './components/ProductNarrative';
import Features from './components/Features';
import Trust from './components/Trust';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />
            <main>
                <Hero />
                <Trust />
                <Process />
                <ProductNarrative />
                <Features />
                <UseCases />
                <Pricing />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
