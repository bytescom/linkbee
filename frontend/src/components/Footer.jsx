import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 overflow-hidden text-gray-400 py-2 sm:py-3 md:py-4 px-6 sm:px-8 lg:px-22">
                <div className='flex flex-col-reverse md:flex-row justify-between items-center text-[11px] sm:text-sm lg:text-base'>
                    <div>© 2025 LinkBee. All rights reserved.</div>
                    <hr className="border-t border-gray-700 w-full my-1 md:hidden" />
                    <div className="flex items-center justify-between gap-1 sm:gap-2">
                        {["Privacy Policy", "Terms of Service", "Cookies"].map((link, i) => (
                            <a key={i} href="#" className="hover:text-white transition-colors">
                                {link}
                            </a>
                        ))}
                        <div className="bg-gray-700 rounded-full px-1 sm:px-3 py-1 flex items-center gap-0.5 sm:gap-1">
                            <span className="text-white">🌐</span>
                            <select className="bg-transparent focus:outline-none text-gray-300 text-[12px] sm:text-sm lg:text-base">
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
