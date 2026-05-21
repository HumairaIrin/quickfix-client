import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Local Storage-e user save kora
        const userInfo = { name, email, password };
        localStorage.setItem("registeredUser", JSON.stringify(userInfo));
        
        alert("Account Created! Ekhon Login koren.");
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDFEFF] py-28 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-100">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl w-full bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] rounded-[60px] overflow-hidden flex flex-col md:flex-row border border-slate-50"
            >
                {/* LEFT SIDE: BRANDING */}
                <div className="md:w-[45%] bg-slate-900 p-16 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e4454]/20 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
                    <div className="relative z-10">
                        <motion.div whileHover={{ rotate: -10 }} className="bg-[#0e4454] text-white w-16 h-16 flex items-center justify-center rounded-[24px] font-black text-2xl mb-12 shadow-2xl italic">QF</motion.div>
                        <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-[0.9] tracking-tighter italic">Join the <br /> <span className="text-blue-500">Club.</span></h2>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">Create an account to experience the fastest home service platform in the city.</p>
                    </div>
                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl p-5 rounded-[30px] border border-white/5">
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Priority Support</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: REGISTER FORM */}
                <div className="md:w-[55%] p-12 lg:p-20 flex flex-col justify-center bg-white">
                    <div className="mb-12">
                        <h3 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">Create Account</h3>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">Join QuickFix Today</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2 group-focus-within:text-[#0e4454] transition-colors">Full Name</label>
                            <input name="name" type="text" placeholder="Name" className="w-full px-8 py-5 rounded-[28px] bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 focus:ring-[12px] focus:ring-blue-50 outline-none transition-all font-bold text-slate-700 shadow-sm" required />
                        </div>
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2 group-focus-within:text-[#0e4454] transition-colors">Email Address</label>
                            <input name="email" type="email" placeholder="hello@quickfix.com" className="w-full px-8 py-5 rounded-[28px] bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 focus:ring-[12px] focus:ring-blue-50 outline-none transition-all font-bold text-slate-700 shadow-sm" required />
                        </div>
                        <div className="group">
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2 group-focus-within:text-[#0e4454] transition-colors">Create Password</label>
                            <input name="password" type="password" placeholder="••••••••" className="w-full px-8 py-5 rounded-[28px] bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 focus:ring-[12px] focus:ring-blue-50 outline-none transition-all font-bold text-slate-700 shadow-sm" required />
                        </div>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-6 bg-[#0e4454] text-white rounded-[28px] font-black text-xl shadow-2xl shadow-blue-100 hover:bg-slate-900 transition-all duration-300 mt-6 uppercase tracking-widest">Sign Up Now</motion.button>
                    </form>

                    <div className="mt-16 text-center">
                        <p className="text-slate-400 font-bold text-sm">Already have an account? <Link to="/login" className="text-[#0e4454] font-black ml-2 hover:underline decoration-2 underline-offset-4">Sign In</Link></p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;