import React from 'react'
import { useState } from 'react';
import { Copy, QrCode, ExternalLink, ChevronDown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy as solidCopy } from '@fortawesome/free-solid-svg-icons';
import { faCopy as regularCopy } from '@fortawesome/free-regular-svg-icons';

const mockData = [
    {
        id: "1",
        shortUrl: "https://linkly.com/Bn41aCOlnvj",
        originalUrl: "https://www.twitter.com/tweets/BenelCohu/",
        platform: "Twitter",
        clicks: 1313,
        status: "Active",
        date: "Oct - 10 - 2023",
        icon: "🐦",
    },
    {
        id: "2",
        shortUrl: "https://linkly.com/Bn41aCOlnvj",
        originalUrl: "https://www.youtube.com/watch?v=BJ7ZmHoKuK",
        platform: "YouTube",
        clicks: 4313,
        status: "Inactive",
        date: "Oct - 08 - 2023",
        icon: "📺",
    },
    {
        id: "3",
        shortUrl: "https://linkly.com/Bn41aCOlnvj",
        originalUrl: "https://www.adventuresinwanderlust.com/",
        platform: "Website",
        clicks: 1013,
        status: "Active",
        date: "Oct - 01 - 2023",
        icon: "🏔️",
    },
    {
        id: "4",
        shortUrl: "https://linkly.com/Bn41aCOlnvj",
        originalUrl: "https://vimeo.com/625257654",
        platform: "Vimeo",
        clicks: 1313,
        status: "Active",
        date: "Sep - 20 - 2023",
        icon: "🎬",
    },
    {
        id: "5",
        shortUrl: "https://linkly.com/Bn41aCOlnvj",
        originalUrl: "https://unsplash.com/photos/2KNwQzFVQ",
        platform: "Unsplash",
        clicks: 1423,
        status: "Active",
        date: "Sep - 18 - 2023",
        icon: "📷",
    },
]

const LinkTable = () => {
    const [copiedId, setCopiedId] = useState(null);
    const [expandedItems, setExpandedItems] = useState({});

    const copyToClipboard = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const toggleExpanded = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="py-2 sm:py-3 md:py-4">
            {/* <h1 className="text-2xl font-bold text-white mb-6">Shorten Links</h1> */}

            {/* Desktop Table View */}
            <div className="hidden md:block bg-gray-800 relative rounded-lg overflow-x-auto">
                <div className="min-w-full">
                    <table className="min-w-max w-full">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="text-left p-4 text-gray-300 font-medium whitespace-nowrap">Short Link</th>
                                <th className="text-left p-4 text-gray-300 font-medium whitespace-nowrap">Original Link</th>
                                <th className="text-left p-4 text-gray-300 font-medium whitespace-nowrap">QR Code</th>
                                <th className="text-left p-4 text-gray-300 font-medium whitespace-nowrap">Clicks</th>
                                <th className="text-left p-4 text-gray-300 font-medium whitespace-nowrap">Status</th>
                                <th className="text-left p-4 text-gray-300 font-medium whitespace-nowrap">Date ↓</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.map((link) => (
                                <tr key={link.id} className="border-t border-gray-700 hover:bg-gray-750">
                                    <td className="p-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-blue-400 truncate max-w-xs">{link.shortUrl}</span>
                                            <button
                                                onClick={() => copyToClipboard(link.shortUrl, link.id)}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <Copy
                                                    className={`w-4 h-4 ${copiedId === link.id ? 'text-green-400' : 'text-gray-400'}`}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm">
                                                {link.icon}
                                            </div>
                                            <span className="text-gray-300 truncate max-w-xs">{link.originalUrl}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <QrCode className="w-6 h-6 text-gray-400" />
                                    </td>
                                    <td className="p-4 text-gray-300">{link.clicks.toLocaleString()}</td>
                                    <td className="p-4">
                                        <div className="flex items-center space-x-2">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${link.status === "Active"
                                                    ? "bg-green-900 text-green-300"
                                                    : "bg-yellow-900 text-yellow-300"
                                                    }`}
                                            >
                                                {link.status}
                                            </span>
                                            <ExternalLink className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-400">{link.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Note */}
                {mockData.length > 5 && (
                    <div className="sticky bottom-0 left-0 w-full bg-gray-800 p-4 text-center border-t border-gray-700">
                        <p className="text-gray-500 text-sm">
                            You have reached the end of your list.{" "}
                            <a href='#' className="text-blue-400 hover:text-blue-500 hover:underline">
                                Register Now
                            </a> to enjoy Unlimited History.
                        </p>
                    </div>
                )}
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3 overflow-x-auto">
                {mockData.map((link) => (
                    <div key={link.id} className="bg-gray-800 rounded-lg overflow-hidden">
                        {/* Main Card Content */}
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                                        {/* Short URL with label */}
                                        <div className="flex items-center space-x-2 sm:order-1">
                                            <div>
                                                <span className="text-gray-400 text-xs sm:text-sm">Short URL -</span>
                                                <span className="text-blue-400 text-sm truncate">
                                                    {link.shortUrl}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(link.shortUrl, link.id)}
                                                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                                            >
                                                <Copy
                                                    className={`w-4 h-4 ${copiedId === link.id ? 'text-green-400' : 'text-gray-400'}`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => toggleExpanded(link.id)}
                                    className="ml-2 p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${expandedItems[link.id] ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedItems[link.id] && (
                            <div className="px-4 pb-4 border-t border-gray-700">
                                <div className="space-y-3 pt-3">
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">Original URL</div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs">
                                                {link.icon}
                                            </div>
                                            <span className="text-gray-300 text-sm truncate flex-1">
                                                {link.originalUrl}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Clicks</div>
                                            <div className="text-gray-300 text-sm">
                                                {link.clicks.toLocaleString()}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Status</div>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${link.status === "Active"
                                                    ? "bg-green-900 text-green-300"
                                                    : "bg-yellow-900 text-yellow-300"
                                                    }`}
                                            >
                                                {link.status}
                                            </span>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Date</div>
                                            <div className="text-gray-400 text-sm">{link.date}</div>
                                        </div>

                                        <div className="flex space-x-2">
                                            <QrCode className="w-5 h-5 text-gray-400" />
                                            <ExternalLink className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Mobile Footer */}
                {mockData.length > 4 && (
                    <div className="text-center py-3 opacity-50">
                        <p className="text-gray-500 text-sm">
                            <a href='#' className="text-blue-400 hover:text-blue-500 hover:underline">
                                Register Now
                            </a> to enjoy Unlimited History
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LinkTable