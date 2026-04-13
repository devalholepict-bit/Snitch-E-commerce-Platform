import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth"
import { Link, useNavigate } from 'react-router';
import ContinueWithGoogle from '../components/ContinueWithGoogle';

const Register = () => {

    const { handleRegister } = useAuth()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        password: '',
        isSeller: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister({
            email: formData.email,
            contact: formData.contactNumber,
            password: formData.password,
            isSeller: formData.isSeller,
            fullname: formData.fullName
        })
        navigate("/")
    };

    return (
        <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] font-sans selection:bg-[#FFD700] selection:text-[#131313] flex flex-col lg:flex-row">

            {/* Split Screen - Left Image Section */}
            <div className="hidden lg:flex lg:w-[55%] relative bg-[#0e0e0e] items-center justify-center overflow-hidden border-r border-[#1c1b1b]">
                <img
                    src="/snitch_editorial.png"
                    alt="Snitch Fashion Editorial"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-luminosity hover:scale-[1.03] transition-transform duration-[20s] ease-out"
                />

                {/* Refined gradient overlays for cinematic look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/20 opacity-95"></div>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0e0e0e] to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0e0e0e] opacity-90"></div>

                <div className="relative z-10 p-20 flex flex-col h-full justify-between w-full max-w-3xl">
                    <h2 className="text-[#FFD700] text-2xl font-headline italic tracking-widest uppercase mb-10">Snitch.</h2>

                    <div className="mt-auto mb-10">
                        <p className="text-6xl lg:text-7xl font-headline font-normal tracking-tight leading-[1.05] text-white mb-8">
                            Define your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9c400] to-[#ffd700] italic font-semibold">aesthetic.</span>
                        </p>
                        <p className="text-[#d0c6ab] max-w-lg text-xl leading-relaxed font-light">
                            Join the exclusive movement of creators and brands redefining the modern fashion landscape.
                        </p>
                    </div>
                </div>
            </div>

            {/* Split Screen - Right Form Section */}
            <div className="w-full lg:w-[45%] flex items-center justify-center p-8 sm:p-12 lg:p-20 min-h-screen overflow-y-auto z-10 bg-[#0e0e0e]">
                <div className="w-full max-w-md bg-[#131313] lg:bg-transparent p-10 md:p-14 lg:p-0 rounded-2xl lg:rounded-none shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] lg:shadow-none">
                    <div className="mb-14">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-[#FFD700] font-medium mb-4">Welcome to Snitch</h2>
                        <h1 className="text-4xl md:text-5xl font-headline font-semibold tracking-tight text-white">Elevate Your Style</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        {/* Full Name */}
                        <div className="flex flex-col relative group">
                            <label className="text-xs uppercase tracking-wider text-[#d0c6ab] mb-2 font-medium opacity-80 transition-opacity group-focus-within:opacity-100 group-focus-within:text-[#FFD700]">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="bg-transparent text-white border-b border-[#4d4732] focus:border-[#FFD700] outline-none px-0 py-3 transition-colors duration-300 placeholder-[#4d4732]"
                                placeholder="e.g. John Doe"
                            />
                        </div>

                        {/* Contact Number */}
                        <div className="flex flex-col relative group">
                            <label className="text-xs uppercase tracking-wider text-[#d0c6ab] mb-2 font-medium opacity-80 transition-opacity group-focus-within:opacity-100 group-focus-within:text-[#FFD700]">Contact Number</label>
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                                className="bg-transparent text-white border-b border-[#4d4732] focus:border-[#FFD700] outline-none px-0 py-3 transition-colors duration-300 placeholder-[#4d4732]"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col relative group">
                            <label className="text-xs uppercase tracking-wider text-[#d0c6ab] mb-2 font-medium opacity-80 transition-opacity group-focus-within:opacity-100 group-focus-within:text-[#FFD700]">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="bg-transparent text-white border-b border-[#4d4732] focus:border-[#FFD700] outline-none px-0 py-3 transition-colors duration-300 placeholder-[#4d4732]"
                                placeholder="hello@example.com"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col relative group">
                            <label className="text-xs uppercase tracking-wider text-[#d0c6ab] mb-2 font-medium opacity-80 transition-opacity group-focus-within:opacity-100 group-focus-within:text-[#FFD700]">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="bg-transparent text-white border-b border-[#4d4732] focus:border-[#FFD700] outline-none px-0 py-3 transition-colors duration-300 placeholder-[#4d4732]"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Is Seller Checkbox */}
                        <div className="flex items-center gap-4 mt-4 group w-max cursor-pointer">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    name="isSeller"
                                    id="isSeller"
                                    checked={formData.isSeller}
                                    onChange={handleChange}
                                    className="peer appearance-none w-5 h-5 border border-[#4d4732] rounded-sm bg-transparent checked:bg-[#FFD700] checked:border-[#FFD700] cursor-pointer transition-colors duration-300 group-hover:border-[#FFD700]"
                                />
                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-[#131313]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <label htmlFor="isSeller" className="text-sm tracking-wide text-[#e5e2e1] group-hover:text-[#FFD700] cursor-pointer select-none transition-colors duration-300">Register as Seller</label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-8 w-full bg-[#FFD700] text-[#131313] font-semibold tracking-widest uppercase py-4 px-8 rounded hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                        >
                            Sign Up
                        </button>

                        <ContinueWithGoogle />

                        <div className="text-center mt-8">
                            <a href="/login" className="text-sm font-medium tracking-wide text-[#999077] hover:text-[#FFD700] transition-colors border-b border-transparent hover:border-[#FFD700] py-0.5">
                                Already have an account? Sign in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;