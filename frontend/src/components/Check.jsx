import React from 'react'
import { useState } from 'react';
import { Copy, QrCode, ExternalLink } from 'lucide-react';
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

    const copyToClipboard = (url, id) => {
        navigator.clipboard.writeText(url);
        setCopiedId(id);

        // Revert after 10 seconds
        setTimeout(() => {
            setCopiedId(null);
        }, 5000);
    };

    return (
        <div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="text-left p-4 text-gray-300 font-medium">Short Link</th>
                                <th className="text-left p-4 text-gray-300 font-medium">Original Link</th>
                                <th className="text-left p-4 text-gray-300 font-medium">QR Code</th>
                                <th className="text-left p-4 text-gray-300 font-medium">Clicks</th>
                                <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                                <th className="text-left p-4 text-gray-300 font-medium">Date ↓</th>
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
                                                <FontAwesomeIcon
                                                    icon={copiedId === link.id ? solidCopy : regularCopy}
                                                    className="text-white cursor-pointer"
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
                                                className={`px-2 py-1 rounded-full text-xs ${link.status === "Active" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"
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
            </div>


            {/* Footer Note */}
            <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">
                    You have reached the end of your list.{" "}
                    <button className="text-blue-400 hover:text-blue-300">Register Now</button> to enjoy Unlimited History
                </p>
            </div>
        </div>
    )
}

export default LinkTable
