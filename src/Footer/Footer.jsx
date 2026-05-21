import React from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">

            {/* === ১. Top Contact Section === */}
            <div className="container mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Queries */}
                    <Link to="/contact" className="flex space-x-4 items-start group">
                        <div className="p-3 bg-white border border-slate-200 rounded-2xl text-2xl text-[#0e4454] group-hover:bg-[#0e4454] group-hover:text-white transition-all shadow-sm">
                            <MdOutlineMessage />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Having Queries?</h3>
                            <p className="text-sm text-slate-500 mt-1">Talk to our experts for any help.</p>
                        </div>
                    </Link>

                    {/* Location */}
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex space-x-4 items-start group">
                        <div className="p-3 bg-white border border-slate-200 rounded-2xl text-2xl text-[#0e4454] group-hover:bg-[#0e4454] group-hover:text-white transition-all shadow-sm">
                            <IoLocationOutline />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Locate Us</h3>
                            <p className="text-sm text-slate-500 mt-1">Chittagong, Bangladesh</p>
                        </div>
                    </a>

                    {/* Call */}
                    <a href="tel:+880123456789" className="flex space-x-4 items-start group">
                        <div className="p-3 bg-white border border-slate-200 rounded-2xl text-2xl text-[#0e4454] group-hover:bg-[#0e4454] group-hover:text-white transition-all shadow-sm">
                            <FiPhone />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Call Us Today</h3>
                            <p className="text-sm text-slate-500 mt-1">+880 1234-567890</p>
                        </div>
                    </a>

                    {/* Email */}
                    <a href="mailto:support@quickfix.com" className="flex space-x-4 items-start group">
                        <div className="p-3 bg-white border border-slate-200 rounded-2xl text-2xl text-[#0e4454] group-hover:bg-[#0e4454] group-hover:text-white transition-all shadow-sm">
                            <HiOutlineMail />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Get In Inbox</h3>
                            <p className="text-sm text-slate-500 mt-1">support@quickfix.com</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* === ২. Middle Section (Logo & Links) === */}
            <div className="container mx-auto px-6 md:px-12 py-12 border-t border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">

                    {/* Logo & Description */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-2xl font-black text-[#0e4454] flex items-center gap-1">
                            {/* Text box tar bodle direct logo image tag */}
                            <img 
                                src="/src/assets/logo_QF.png"  // Tomar public/ folder-e thaka image name onujayi (e.g., /logo.png, /logo.jpg)
                                alt="QuickFix Logo" 
                                className="h-9 w-auto object-contain" // Height 9 (36px) dewa hoyeche jate description-er shathe perfectly match kore
                            />
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-sm font-medium">
                            We provide professional home maintenance and repair services. 
                            From electrical work to deep cleaning, we ensure your home stays 
                            in perfect condition with our verified experts.
                        </p>
                    </div>

                    {/* Services/Categories */}
                    <div>
                        <h4 className="text-lg font-bold mb-5 text-slate-900">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-500 font-semibold">
                            <li><Link to="/services" className="hover:text-[#0e4454] transition-colors">AC Repair</Link></li>
                            <li><Link to="/services" className="hover:text-[#0e4454] transition-colors">Cleaning</Link></li>
                            <li><Link to="/services" className="hover:text-[#0e4454] transition-colors">Electrical</Link></li>
                            <li><Link to="/services" className="hover:text-[#0e4454] transition-colors">Plumbing</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-5 text-slate-900">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-slate-500 font-semibold">
                            <li><Link to="/about" className="hover:text-[#0e4454] transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-[#0e4454] transition-colors">Contact</Link></li>
                            <li><Link to="/faq" className="hover:text-[#0e4454] transition-colors">FAQ</Link></li>
                            <li><Link to="/terms" className="hover:text-[#0e4454] transition-colors">Terms & Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-bold mb-5 text-slate-900">Follow Us</h4>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0e4454] hover:bg-[#0e4454] hover:text-white transition-all shadow-sm">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all shadow-sm">
                                <FaWhatsapp />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* === ৩. Bottom Copyright === */}
            <div className="bg-slate-100 py-6">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} QuickFix Services. All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;