import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const Login = ({ onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="flex justify-center space-x-4 mb-4">
          <button className="text-[40px] font-extrabold text-sky-600 border-sky-600 border-b-4 pb-1">
            Login
          </button>
        </div>

        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleLoginSubmit} className="space-y-4">
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
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="Enter Your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <a
            href="/signup"
            onClick={() => onToggle(false)} // Toggle to Signup page
            className="text-sky-600 font-medium hover:text-sky-700"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
