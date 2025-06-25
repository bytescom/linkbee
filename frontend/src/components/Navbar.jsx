import React from 'react'
import { ArrowRightToLine } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-22">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Linkbee
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white bg-gray-800 border border-gray-600 rounded-full px-6 py-1.5 transition-colors flex items-center gap-1.5 cursor-pointer">
            Login
            <ArrowRightToLine className="w-5 pt-0.5" />
          </button>


          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors cursor-pointer">
            Register Now
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
