import { useState } from "react";
import { Link } from "react-router-dom";
import login from "/src/assets/onboarding/login.jpg";
import logo from "/src/assets/onboarding/logo.jpg"
import { Eye, EyeOff, ShieldCogCorner, Key } from 'lucide-react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="w-full min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 md:hidden">
                <img
                    src={login}
                    alt="login background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* 🧩 MAIN CONTAINER */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full shadow-lg overflow-hidden">

                {/* 🖥️ DESKTOP IMAGE SIDE */}
                <div className="hidden md:block relative">
                    <img
                        src={login}
                        alt="login"
                        className="w-full h-screen object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="max-w-105 bg-gray-200/90 backdrop-blur-md p-10 rounded-xl shadow-lg text-start space-y-5">

                            <img
                                src={logo}
                                alt="logo"
                                className="w-30 h-10 object-contain"
                            />

                            <h1 className="text-lg font-semibold text-gray-800 leading-snug">
                                Excellence in <br /> Human Capital
                            </h1>

                            <p className="text-sm text-gray-600 text-justify">
                                The architectural curator of workforce intelligence.
                                Managing your global talent with precision, clarity,
                                and institutional trust.
                            </p>

                            <p className="text-md pt-5 font-semibold tracking-widest text-gray-500">
                                360DEGREEHR
                            </p>

                        </div>
                    </div>
                </div>

                {/* 🧾 FORM (WORKS ON BOTH MOBILE + DESKTOP) */}
                <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-transparent md:bg-white">

                    <div className="max-w-3xl space-y-6 md:pt-0 pt-24">
                        <div>
                            <h1 className="text-3xl font-bold text-white md:text-gray-800">
                                Welcome back
                            </h1>
                            <p className="text-white md:text-gray-500 mt-2">
                                Please enter your credentials to access <br /> your dashboard
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div className="flex flex-col space-y-2">
                                <h1 className="text-white md:text-gray-800">Email Address</h1>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 text-white md:text-black border 
                                        border-white md:border-black/20 rounded-lg 
                                        focus:outline-none focus:ring focus:ring-black/50
                                    "
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-gray-800">Password</h1>

                                    <Link
                                        to="/forgot-password"
                                        className="text-sm md:text-[#335AB2] text-white hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="relative flex items-center">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="w-full px-4 py-3 text-white md:text-black border 
                                        border-white md:border-black/20 rounded-lg 
                                        focus:outline-none focus:ring focus:ring-black/50
                                    "
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 text-white md:text-gray-500"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember */}
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span className="text-sm text-white md:text-gray-600">
                                    Remember me for 30 days
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#335AB2] text-white py-3 
                                    rounded-lg hover:bg-[#244EA5] transition
                                "
                            >
                                Sign in
                            </button>
                        </form>

                        <hr className="text-white md:text-gray-200" />
                        <div className="space-y-4 text-sm text-white md:text-gray-600">

                            <div className="flex gap-3 items-start border border-black/10 p-4 rounded-lg hover:shadow-sm transition">
                                <ShieldCogCorner size={20} className="text-white md:text-gray-700 mt-1" />

                                <div className="space-y-1">
                                    <h1 className="font-semibold text-white md:text-gray-800">
                                        Admin or Manager?
                                    </h1>
                                    <p className="text-sm text-white md:text-gray-500 leading-relaxed">
                                        Access the Enterprise Portal to manage departments and compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start border border-black/10 p-4 rounded-lg hover:shadow-sm transition">
                                <Key size={20} className="text-white md:text-gray-700 mt-1" />

                                <div className="space-y-1">
                                    <h1 className="font-semibold text-white md:text-gray-800">
                                        Employee?
                                    </h1>
                                    <p className="text-sm text-white md:text-gray-500 leading-relaxed">
                                        Use your SSO credentials for a seamless, secure login experience.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

