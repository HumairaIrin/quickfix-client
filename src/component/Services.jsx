import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// === ১. BOOKING FORM COMPONENT (ULTRA FAST - NO BOUNCE) ===
const BookingForm = ({ service, onClose }) => {
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Cash on Service');

    const handleConfirm = (e) => {
        e.preventDefault();
        if (!address.trim() || !date || !time) {
            alert("⚠️ Bhai, shob ghor puron koren!");
            return;
        }
        alert(`Done! Booking for ${service.name}\n Address: ${address}\n💵 Payment: ${paymentMethod}`);
        onClose();
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }} // Instant background
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-[2px] p-4"
        >
            <motion.div 
                initial={{ opacity: 0, scale: 1, y: 0 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "linear" }} // No slow motion, no bounce
                className="bg-white w-full max-w-lg rounded-[30px] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
                <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 font-black text-xl transition-colors">✕</button>
                
                <div className="mb-8 text-center lg:text-left">
                    <span className="text-[#0e4454] font-black uppercase tracking-widest text-[9px] bg-blue-50 px-3 py-1 rounded-full">Secure Booking</span>
                    <h2 className="text-3xl font-black text-slate-900 mt-3 italic leading-tight uppercase tracking-tighter">{service.name} <span className="text-[#0e4454]">.</span></h2>
                </div>

                <form className="space-y-4" onSubmit={handleConfirm}>
                    <div>
                        <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Service Location</label>
                        <input type="text" placeholder="Your address..." value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-6 py-4 rounded-[20px] bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 outline-none transition-all font-bold text-slate-700 shadow-sm" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-6 py-4 rounded-[20px] bg-slate-50 border-none font-bold text-slate-700 shadow-sm" required />
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-6 py-4 rounded-[20px] bg-slate-50 border-none font-bold text-slate-700 shadow-sm" required />
                    </div>

                    {/* --- PAYMENT SECTION --- */}
                    <div className="pt-2">
                        <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Payment Method</label>
                        <div className="flex gap-3">
                            <div 
                                onClick={() => setPaymentMethod('Cash on Service')}
                                className={`flex-1 p-4 rounded-[20px] border-2 cursor-pointer transition-all flex flex-col items-center gap-2 ${paymentMethod === 'Cash on Service' ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white hover:border-blue-200'}`}
                            >
                                <span className="text-xl">💵</span>
                                <span className={`text-[9px] font-black uppercase ${paymentMethod === 'Cash on Service' ? 'text-[#0e4454]' : 'text-slate-400'}`}>Cash on Delivery</span>
                            </div>
                            <div className="flex-1 p-4 rounded-[20px] border-2 border-slate-50 bg-slate-50/50 opacity-40 cursor-not-allowed flex flex-col items-center gap-2">
                                <span className="text-xl">💳</span>
                                <span className="text-[9px] font-black uppercase text-slate-300">Online Pay</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full py-5 bg-[#0e4454] text-white rounded-[20px] font-black text-lg shadow-xl shadow-blue-100 hover:bg-slate-900 transition-all mt-4 uppercase tracking-widest">Confirm Booking</button>
                </form>
            </motion.div>
        </motion.div>
    );
};

// === ২. MAIN SERVICES COMPONENT ===
const Services = () => {
    const [allServices, setAllServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState(''); 
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
                setFilteredServices(data);
            })
            .catch(err => console.error("Error:", err));
    }, []);

    useEffect(() => {
        let result = allServices;
        if (activeCategory !== 'All') result = result.filter(s => s.category === activeCategory);
        if (searchTerm) result = result.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredServices(result);
    }, [activeCategory, searchTerm, allServices]);

    const handleBookingRequest = (service) => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn !== "true") {
            alert("Please login first!");
            navigate('/login'); 
        } else {
            setSelectedService(service);
        }
    };

    const categories = ['All', 'Electrical', 'Plumbing', 'Cleaning', 'Appliance', 'Security', 'Gadgets'];

    return (
        <div className="bg-white min-h-screen pt-28 pb-20 px-6 lg:px-20 font-sans">
            
            <AnimatePresence mode="wait">
                {selectedService && <BookingForm service={selectedService} onClose={() => setSelectedService(null)} />}
            </AnimatePresence>

            <div className="max-w-4xl mb-12">
                <h1 className="text-6xl lg:text-8xl font-black text-slate-950 italic mb-8 tracking-tighter leading-none">OUR <span className="text-[#0e4454]">Services</span></h1>
                
                <div className="max-w-md relative group">
                    <input 
                        type="text" placeholder="Search services..." value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-600 outline-none transition-all font-bold text-slate-700 shadow-sm"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">🔍</div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((cat) => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all border-2 ${activeCategory === cat ? 'bg-[#0e4454] border-blue-600 text-white' : 'bg-white border-slate-100 text-slate-400 hover:text-[#0e4454]'}`}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                    <div key={service.id} className="relative group cursor-pointer overflow-hidden rounded-[30px] bg-slate-50 border h-[380px]">
                        <img src={service.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={service.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                            <h3 className="text-2xl font-black italic uppercase tracking-tighter">{service.name}</h3>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-blue-400 font-black text-xl">{service.price}</p>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleBookingRequest(service); }}
                                    className="px-5 py-2 bg-[#0e4454] text-white rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-white hover:text-[#0e4454] transition-all"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;