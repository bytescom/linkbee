import React from 'react'
import { Link, MoveRight } from "lucide-react"
import { useState } from "react"

const Check = () => {
    const [url, setUrl] = useState("")
    const [autoPaste, setAutoPaste] = useState(false)


    const handleShorten = () => {
        if (url.trim()) {
            console.log("Shortening URL:", url)
            // Add your URL shortening logic here
        }
    }

    return (
        <div className="text-center sm:mx-0 mb-12 mt-8 px-4 space-y-12 sm:space-y-0">
            <div className='flex flex-col lg:gap-5'>
                <p className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Shorten and Share URLs Instantly 🚀
                </p>
                <p className="text-gray-400 text-[13px] sm:text-base md:text-lg mb-6">
                    Tired of long, ugly URLs? Use LinkBee to shorten them, personalize them, and track every click — all in seconds!
                </p>

            </div>

            {/* URL Shortener Form */}
            <div className="max-w-2xl mx-auto mb-6">
                <div className="flex items-center bg-gray-800 rounded-4xl p-2 shadow-md min-w-0">
                    <div className="px-2 sm:px-4 text-gray-400 flex-shrink-0">
                        <Link className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Paste link here"
                        className="flex-1 bg-transparent text-white placeholder-gray-400 px-1 sm:px-2 py-2 focus:outline-none text-sm md:text-base min-w-0"
                    />
                    <button
                        onClick={handleShorten}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-2.5 text-sm md:text-base rounded-full font-medium transition-all duration-200 cursor-pointer flex-shrink-0 ml-1 sm:ml-2"
                    >
                        <span className="sm:hidden">
                            <MoveRight className="w-3 h-3" />
                        </span>
                        <span className="hidden sm:inline">
                            Shorten
                        </span>
                    </button>
                </div>
            </div>

            {/* Auto Paste Option */}
            <div className="flex items-center justify-center gap-2 mb-4 text-sm">
                <input
                    type="checkbox"
                    id="autoPaste"
                    checked={autoPaste}
                    onChange={(e) => setAutoPaste(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="autoPaste" className="text-gray-400">
                    Auto Paste from Clipboard
                </label>
            </div>

            <p className="text-gray-500 text-xs md:text-sm">
                You can create <span className="text-blue-400 font-semibold">5</span> more links.
                <a href='#' className="text-blue-400 hover:text-blue-500 hover:underline"> Register Now</a> to enjoy unlimited usage ⓘ
            </p>
        </div>
    )
}

export default Check
