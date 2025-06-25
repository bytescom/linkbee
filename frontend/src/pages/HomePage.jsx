import React from 'react'
import Navbar from '../components/Navbar'
import LinkInputBox from '../components/LinkInputBox'
import Footer from '../components/Footer'
import LinkTable from '../components/LinkTable'

const HomePage = () => {


    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            {/* Header */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow container mx-auto pt-12 pb-4">
                <LinkInputBox />

                {/* You can also render Links Table here */}
                <LinkTable/>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage
