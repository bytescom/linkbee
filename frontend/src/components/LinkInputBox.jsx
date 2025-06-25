import React from 'react'
import { Link } from "lucide-react"
import { useState } from "react"

const LinkInputBox = () => {
    const [url, setUrl] = useState("")
    const [autoPaste, setAutoPaste] = useState(false)


    const handleShorten = () => {
        if (url.trim()) {
            console.log("Shortening URL:", url)
            // Add your URL shortening logic here
        }
    }

    return (
        <div className="text-center mb-12 mt-8 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shorten and Share URLs Instantly 🚀
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
                Tired of long, ugly URLs? Use LinkBee to shorten them, personalize them, and track every click — all in seconds!
            </p>

            {/* URL Shortener Form */}
            <div className="max-w-2xl mx-auto mb-6">
                <div className="flex items-center bg-gray-800 rounded-4xl p-2 shadow-md">
                    <div className="px-4 text-gray-400">
                        <Link className="w-5 h-5" />
                    </div>
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Paste your link here"
                        className="flex-1 bg-transparent text-white placeholder-gray-400 px-2 py-2 focus:outline-none text-sm md:text-base"
                    />
                    <button
                        onClick={handleShorten}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 md:px-8 md:py-2.5 text-sm md:text-base rounded-full font-medium transition-all duration-200 cursor-pointer"
                    >
                        Shorten
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
                <span className="ml-1 text-blue-500 hover:underline cursor-pointer">Register now</span> to enjoy unlimited usage ⓘ
            </p>
        </div>

    )
}

export default LinkInputBox
