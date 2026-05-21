import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const containerRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(53);
    const [showText, setShowText] = useState(false);

    const startFrame = 53; 
    const totalFrames = 123; 
    const requestRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // যখন ভিডিও কন্টেনারটি স্ক্রিনের টপে এসে টাচ করবে
            if (rect.top <= 0) {
                const totalScrollable = rect.height - windowHeight;
                const currentScrolled = Math.abs(rect.top);
                
                const scrollFraction = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1);

                const frameRange = totalFrames - startFrame;
                const frameIndex = Math.min(
                    totalFrames,
                    Math.max(startFrame, startFrame + Math.floor(scrollFraction * frameRange))
                );

                if (!requestRef.current) {
                    requestRef.current = requestAnimationFrame(() => {
                        setCurrentFrame(frameIndex);
                        
                        if (frameIndex >= 70) { 
                            setShowText(true);
                        } else {
                            setShowText(false);
                        }
                        requestRef.current = null;
                    });
                }
            } else {
                setCurrentFrame(startFrame);
                setShowText(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const getFramePath = (index) => {
        const paddedIndex = String(index).padStart(3, '0');
        return `/src/assets/videoframes/ezgif-frame-${paddedIndex}.jpg`;
    };

    return (
        <div className="bg-[#FDFEFF] min-h-screen font-sans selection:bg-blue-100 relative">
            
            {/* === ০. FIRST SECTION (স্বাভাবিক নিয়মে ওপরে থাকবে) === */}
            <div className="w-full h-screen relative z-30 bg-white">
                <img 
                    src="/src/assets/first_section.png" 
                    alt="Intro Header" 
                    className="w-full h-full object-cover select-none"
                />
                
                {/* ডানপাশের টেক্সট কন্টেন্ট + Book Now বাটন */}
                <div className="absolute inset-0 flex items-center justify-end p-6 container mx-auto px-6 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 max-w-xl text-left bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-3xl"
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Expert hands <br />
                                for your <br />
                                <span className="text-[#0e4454]">sweet home.</span>
                            </h1>
                            
                            <p className="text-xl text-slate-700 md:text-slate-500 leading-relaxed font-medium">
                                Reliable experts for your electrical, plumbing, and cleaning needs. We make home maintenance effortless.
                            </p>
                        </div>

                        {/* === BOOK NOW BUTTON === */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link 
                                to="/login" 
                                className="inline-block bg-[#0e4454] hover:bg-[#0a323e] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 pointer-events-auto"
                            >
                                Book Now
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            
            {/* === ১. VIDEO IMAGE SEQUENCE HERO === */}
            <section 
                ref={containerRef} 
                className="w-full h-[250vh] relative z-20 bg-white"
            >
                <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
                    
                    <img
                        src={getFramePath(currentFrame)}
                        alt={`Scroll Frame ${currentFrame}`}
                        className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    
                    {/* এই সেকশনের টেক্সট কন্টেন্ট + About Us বাটন */}
                    <div className="absolute inset-0 flex items-center p-6 container mx-auto px-6 lg:px-16 pointer-events-none">
                        <AnimatePresence>
                            {showText && (
                                <motion.div 
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}   
                                    exit={{ opacity: 0, x: -100 }}    
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-left space-y-8 max-w-4xl pointer-events-auto"
                                >
                                    <div className="space-y-6">
                                        <h1 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tight leading-tight">
                                            Bringing Perfection<br /> 
                                            To Every Corner<br />
                                            <span className="text-[#0e4454]">sweet home.</span>
                                        </h1>
                                        <p className="text-slate-600 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
                                            Watch our premium equipment and verified professionals transform environments in real-time.
                                        </p>
                                    </div>

                                    {/* === ABOUT US BUTTON === */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Link 
                                            to="/about" 
                                            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                        >
                                            About Us
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            {/* === ২. SERVICES SECTION (লিংকসহ ফিক্সড) === */}
            <section className="mt-20 container mx-auto px-6 lg:px-16 relative z-30 bg-[#FDFEFF]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-5xl font-black text-slate-900 tracking-tight">Our Expertise.</h2>
                    <Link to="/services" className="text-[#0e4454] font-black text-lg hover:underline decoration-2 underline-offset-8 transition-all">Explore all services →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { title: 'Electrical', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600', path: '/services' },
                        { title: 'Plumbing', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600', path: '/services' },
                        { title: 'Cleaning', img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600', path: '/services' }
                    ].map((item, idx) => (
                        <Link to={item.path} key={idx} className="block group">
                            <motion.div 
                                whileHover={{ y: -15 }}
                                className="bg-white hover:bg-[#0e4454] p-6 rounded-[60px] shadow-xl shadow-slate-100 hover:shadow-2xl transition-all duration-500 border border-slate-50 cursor-pointer"
                            >
                                <div className="h-72 rounded-[45px] overflow-hidden mb-8">
                                    <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                                </div>
                                
                                {/* টাইটেল: হোভারে টেক্সট সাদা হবে */}
                                <h3 className="text-3xl font-black text-slate-900 group-hover:text-white mb-2 px-4 transition-colors duration-500">
                                    {item.title}
                                </h3>
                                
                                {/* সাবটাইটেল */}
                                <p className="text-slate-400 group-hover:text-blue-200 font-bold mb-6 px-4 uppercase tracking-widest text-xs transition-colors duration-500">
                                    Verified Professionals
                                </p>
                                
                                <div className="flex justify-between items-center px-4">
                                    {/* বটম টেক্সট */}
                                    <span className="font-black text-[#0e4454] group-hover:text-white italic transition-colors duration-500">
                                        Premium Care
                                    </span>
                                    
                                    {/* বাটন */}
                                    <div className="w-12 h-12 bg-slate-900 text-white group-hover:bg-white group-hover:text-[#0e4454] rounded-full flex items-center justify-center transition-all duration-500">
                                        →
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* === ৩. INFINITE SERVICE TOOLS TICKER === */}
            <section className="mt-20 bg-slate-50 py-16 overflow-hidden border-y border-slate-100/60 relative z-30">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-16 mb-10 text-center">
                    <p className="text-[2xl] font-black uppercase tracking-widest text-[#0e4454]">
                        Professional Tools & Premium Care For Your Home
                    </p>
                </div>

                <div className="w-full overflow-hidden relative flex">
                    <div className="animate-logo-marquee flex gap-16 items-center pr-16">
                        {[
                            { name: "Paint Rollers", url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=200&auto=format&fit=crop" },
                            { name: "Plumbing Wrench", url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop" },
                            { name: "Electric Tools", url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=200&auto=format&fit=crop" },
                            { name: "Cleaning Brushes", url: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=200&auto=format&fit=crop" },
                            { name: "Measurement Tape", url: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=200&auto=format&fit=crop" }
                        ].map((tool, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white h-24 px-6 rounded-[28px] shadow-[0_8px_25px_-10px_rgba(0,0,0,0.04)] border border-slate-100/80 shrink-0 overflow-hidden group">
                                <div className="h-14 w-14 rounded-2xl overflow-hidden shrink-0">
                                    <img src={tool.url} alt={tool.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <span className="text-sm font-black text-slate-700 tracking-tight whitespace-nowrap">{tool.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="animate-logo-marquee flex gap-16 items-center pr-16" aria-hidden="true">
                        {[
                            { name: "Paint Rollers", url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=200&auto=format&fit=crop" },
                            { name: "Plumbing Wrench", url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop" },
                            { name: "Electric Tools", url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=200&auto=format&fit=crop" },
                            { name: "Cleaning Brushes", url: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=200&auto=format&fit=crop" },
                            { name: "Measurement Tape", url: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=200&auto=format&fit=crop" }
                        ].map((tool, index) => (
                            <div key={`dup-${index}`} className="flex items-center gap-4 bg-white h-24 px-6 rounded-[28px] shadow-[0_8px_25px_-10px_rgba(0,0,0,0.04)] border border-slate-100/80 shrink-0 overflow-hidden group">
                                <div className="h-14 w-14 rounded-2xl overflow-hidden shrink-0">
                                    <img src={tool.url} alt={tool.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <span className="text-sm font-black text-slate-700 tracking-tight whitespace-nowrap">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;