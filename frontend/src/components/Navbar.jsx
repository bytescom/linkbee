import React from 'react'
import { ArrowRightToLine } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between py-4 px-6 sm:px-8 lg:px-22">
        <div className="flex items-center space-x-8">
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Linkbee
          </div>
        </div>

        <div className="flex items-center gap-0 sm:gap-2 md:gap-3 lg:gap-5">
          <button className="text-gray-300 hover:text-white bg-gray-800 border border-gray-600 rounded-full px-3 py-1 md:px-6 md:py-1.5 transition-colors flex items-center gap-1 sm:gap-1.5 cursor-pointer text-sm md:text-base">
            Login
            <ArrowRightToLine className="w-4 sm:w-5 pt-0.5" />
          </button>

          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full transition-colors cursor-pointer text-sm md:text-base">
            Register Now
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
