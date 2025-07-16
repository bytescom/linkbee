import React from 'react'
import Navbar from '../components/Navbar'
import LinkInputBox from '../components/LinkInputBox'
import Footer from '../components/Footer'
import LinkTable from '../components/LinkTable'

const Home = () => {
  return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <Navbar />

      {/* Main Content Centered */}
      <main className="flex-grow flex flex-col justify-center px-6 sm:px-8 lg:px-22 py-6">
        <LinkInputBox />
        <LinkTable/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
