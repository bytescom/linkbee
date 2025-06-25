import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Footer (stays at bottom) */}
            <footer className="bg-gray-800 overflow-hidden text-gray-400 px-6 py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div>© 2025 LinkBee. All rights reserved.</div>
                    <div className="flex items-center space-x-6">
                        {["Privacy Policy", "Terms of Service", "Cookies"].map((link, i) => (
                            <a key={i} href="#" className="hover:text-white transition-colors">
                                {link}
                            </a>
                        ))}
                        <div className="flex items-center space-x-2">
                            <span>🌐</span>
                            <select className="bg-transparent focus:outline-none text-gray-400">
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
