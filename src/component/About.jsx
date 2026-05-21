import React from 'react';
import { 
    FiTarget, 
    FiEye, 
    FiShield, 
    FiDollarSign, 
    FiAward 
} from 'react-icons/fi'; // মডার্ন এবং ক্লিন Feather Icons

const About = () => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16 font-sans">
            
            {/* === 1. HEADER SECTION === */}
            <section className="container mx-auto px-6 lg:px-16 text-center mb-20">
                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                    Redefining Home Services <br /> 
                    <span className="text-[#0e4454]">With Trust & Quality.</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    QuickFix started with a simple mission: to make home maintenance stress-free. 
                    We bridge the gap between skilled professionals and homeowners who value their time and quality of work.
                </p>
            </section>

            {/* === 2. VISION & MISSION (GRID) === */}
            <section className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                {/* Our Mission */}
                <div className="bg-[#0e4454] p-12 rounded-[40px] text-white shadow-xl shadow-blue-100 group hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                        <FiTarget className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-blue-50 opacity-90 leading-relaxed text-lg">
                        To provide every household with reliable, verified, and affordable professional services 
                        through a seamless digital experience. We aim to empower local experts by giving them a 
                        platform to showcase their skills.
                    </p>
                </div>

                {/* Our Vision */}
                <div className="bg-slate-900 p-12 rounded-[40px] text-white shadow-xl shadow-slate-200 group hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                        <FiEye className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                        We envision a world where home repairs are no longer a headache. QuickFix aims to be 
                        the global leader in on-demand home services, set apart by our commitment to 
                        safety and customer satisfaction.
                    </p>
                </div>
            </section>

            {/* === 3. CORE VALUES === */}
            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <img 
                                src="/src/assets/about_pic.jpg" 
                                alt="Our Team" 
                                className="rounded-[40px] shadow-2xl w-full h-[400px] object-cover select-none"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-black text-slate-900">Why We Are Different?</h2>
                            
                            {/* Value 1: Safety First */}
                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md shadow-slate-100 shrink-0 text-xl text-[#0e4454] group-hover:bg-[#0e4454] group-hover:text-white transition-all duration-300">
                                    <FiShield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900 mb-1">Safety First</h4>
                                    <p className="text-slate-500 leading-relaxed">Every pro on our platform goes through a 3-step background check and verification process.</p>
                                </div>
                            </div>

                            {/* Value 2: Transparent Pricing */}
                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md shadow-slate-100 shrink-0 text-xl text-[#0e4454] group-hover:bg-[#0e4454] group-hover:text-white transition-all duration-300">
                                    <FiDollarSign className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900 mb-1">Transparent Pricing</h4>
                                    <p className="text-slate-500 leading-relaxed">No hidden costs. You know exactly what you pay before the work even begins.</p>
                                </div>
                            </div>

                            {/* Value 3: Quality Guaranteed */}
                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md shadow-slate-100 shrink-0 text-xl text-[#0e4454] group-hover:bg-[#0e4454] group-hover:text-white transition-all duration-300">
                                    <FiAward className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900 mb-1">Quality Guaranteed</h4>
                                    <p className="text-slate-500 leading-relaxed">Not happy with the service? We’ll make it right or give you a full refund.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;