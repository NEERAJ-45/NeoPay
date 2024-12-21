import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img className="h-full w-full" src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="Logo" />
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300">Home</a>
                                <a href="#" className="textblack  px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300">About</a>
                                <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar