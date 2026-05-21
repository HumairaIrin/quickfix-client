import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const location = useLocation();
    const navigate = useNavigate();
    
    const currentPath = location.pathname;

    // ১. Login Status Check (Local Storage theke)
    useEffect(() => {
        const checkUser = () => {
            const status = localStorage.getItem("isLoggedIn");
            setIsLoggedIn(status === "true");
        };
        checkUser();
    }, [location]);

    // ২. Direct Logout Function
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn"); // Data muche fela
        setIsLoggedIn(false); // UI update
        alert("Logged out successfully! 👋");
        navigate("/login");
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[1000] backdrop-blur-xl bg-white/70 border-b border-slate-200/50 shadow-sm px-6 md:px-12 py-4 flex items-center justify-between">
            
            {/* === LOGO SECTION WITH IMAGE === */}
            <div className="flex items-center">
                <Link to="/" className="flex items-center gap-3 group tracking-tighter">
                    {/* QF Box text er bodle logo image dewa holo, responsive scaling shoho */}
                    <img 
                        src="/src/assets/logo_QF.png"
                        alt="QuickFix Logo" 
                        className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                    />
                </Link>
            </div>

            {/* Middle Menu */}
            <nav className="hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-wider text-slate-800">
                <Link to="/" className={`${currentPath === "/" ? "text-[#0e4454]" : "text-slate-600"} hover:text-blue-500 transition relative group`}>
                    Home
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#0e4454] transition-transform ${currentPath === "/" ? "scale-100" : "scale-0"} group-hover:scale-100`}></span>
                </Link>
                <Link to="/services" className={`${currentPath === "/services" ? "text-[#0e4454]" : "text-slate-600"} hover:text-blue-500 transition relative group`}>
                    Services
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#0e4454] transition-transform ${currentPath === "/services" ? "scale-100" : "scale-0"} group-hover:scale-100`}></span>
                </Link>
                <Link to="/about" className={`${currentPath === "/about" ? "text-[#0e4454]" : "text-slate-600"} hover:text-blue-500 transition relative group`}>
                    About
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#0e4454] transition-transform ${currentPath === "/about" ? "scale-100" : "scale-0"} group-hover:scale-100`}></span>
                </Link>
            </nav>

            {/* Right Side - Direct Login/Logout Button */}
            <div className="flex items-center space-x-6">
                {!isLoggedIn ? (
                    <Link 
                        to="/login" 
                        className="px-6 py-2.5 bg-[#0e4454] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-slate-900 transition-all active:scale-95"
                    >
                        Login
                    </Link>
                ) : (
                    <button 
                        onClick={handleLogout}
                        className="px-6 py-2.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-sm"
                    >
                        Logout
                    </button>
                )}

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-2xl text-slate-800" onClick={() => setOpen(!open)}>
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="absolute top-20 right-6 left-6 bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 flex flex-col space-y-5 md:hidden text-lg z-[1001]">
                    <Link to="/" onClick={() => setOpen(false)} className="font-bold border-b pb-2 text-slate-800">Home</Link>
                    <Link to="/services" onClick={() => setOpen(false)} className="font-bold border-b pb-2 text-slate-800">Services</Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="font-bold border-b pb-2 text-slate-800">About</Link>
                    {isLoggedIn ? (
                        <button 
                            onClick={() => { handleLogout(); setOpen(false); }} 
                            className="font-bold text-red-600 text-left"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" onClick={() => setOpen(false)} className="font-bold text-[#0e4454]">Login</Link>
                    )}
                </div>
            )}
        </header>
    );
}