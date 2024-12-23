import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [transition, setTransition] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggle = (loginState) => {
    setTransition(true);
    setTimeout(() => {
      setIsLogin(loginState);
      setTransition(false);
    }, 200);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Signup successful!');
      } else {
        toast.error(data.message || 'An error occurred.');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Login successful!');
      } else {
        toast.error(data.message || 'Invalid credentials!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex items-center font-roboto justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-8">
        <div className="flex justify-center space-x-4">
          <button
            className={`text-lg font-bold ${isLogin ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-500'}`}
            onClick={() => handleToggle(true)}
          >
            Login
          </button>
          <button
            className={`text-lg font-bold ${!isLogin ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-500'}`}
            onClick={() => handleToggle(false)}
          >
            Signup
          </button>
        </div>

        <div className={`transition-opacity duration-300 ${transition ? 'opacity-0' : 'opacity-100'}`}>
          {isLogin ? (
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter Your Email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <form className="space-y-6" onSubmit={handleSignupSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
    </div>
  );
};

export default Signup;