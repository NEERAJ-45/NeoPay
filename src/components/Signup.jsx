import React, {useState} from 'react';
import '../App.css'

const Signup = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle state

    return (
        <div
            className="min-h-screen flex items-center  font-roboto  justify-center  bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-8">
                {/* Toggle Header */}
                <div className="flex justify-center space-x-4">
                    <button
                        className={`text-lg font-bold ${
                            isLogin ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-500'
                        }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`text-lg font-bold ${
                            !isLogin ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-500'
                        }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {/* Conditional Rendering for Login and Signup */}
                {isLogin ? (
                    <form className="space-y-6" action="#" method="POST">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            Welcome Back
                        </h2>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 text-white bg-sky-600 rounded-md hover:bg-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Log In
                        </button>
                    </form>
                ) : (
                    <form className="space-y-6" action="#" method="POST">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            Create Your Account
                        </h2>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                                placeholder="Create a password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                required
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                                placeholder="Confirm your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 text-white bg-sky-600 rounded-md hover:bg-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Sign Up
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Signup;
