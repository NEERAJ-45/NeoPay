import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Signup from "./components/Signup.jsx"
import HomePage from './components/homepage.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App