import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Local Storage theke data check kora
        const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Login Success! 🎉");
            navigate('/services');
        } else {
            alert("Oops! Email ba password thik nai.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-28 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl w-full bg-white shadow-2xl rounded-[40px] overflow-hidden flex flex-col md:flex-row border border-slate-100">
                {/* LEFT SIDE: BRANDING */}
                <div className="md:w-1/2 bg-[#0e4454] p-12 text-white flex flex-col justify-center relative">
                    <div className="relative z-10">
                        <div className="bg-white text-[#0e4454] w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl mb-8 shadow-xl">QF</div>
                        <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Welcome Back to <br /> QuickFix!</h2>
                        <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">Login to manage your home service bookings instantly.</p>
                    </div>
                </div>

                {/* RIGHT SIDE: LOGIN FORM */}
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                    <div className="mb-10 text-center md:text-left">
                        <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Sign In</h3>
                        <p className="text-slate-500 font-bold">Please enter your credentials</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                            <input name="email" type="email" placeholder="name@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold text-slate-700" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 ml-1">
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                            </div>
                            <input name="password" type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold text-slate-700" required />
                        </div>
                        <button type="submit" className="w-full py-4 bg-[#0e4454] text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4">Login Now</button>
                    </form>
                    <div className="mt-12 text-center">
                        <p className="text-slate-500 font-bold">New to QuickFix? <Link to="/register" className="text-[#0e4454] font-black ml-2 hover:underline decoration-2">Create Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;