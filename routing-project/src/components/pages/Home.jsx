import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Home() {
  return (
    <>
        <Header/>
        <main className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-lg opacity-90">Experience excellence with our premium services</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Home</h1>
                    <p className="text-lg text-gray-600">Discover amazing content and features</p>
                </section>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature One</h2>
                        <p className="text-gray-600">Description of your first feature goes here.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature Two</h2>
                        <p className="text-gray-600">Description of your second feature goes here.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature Three</h2>
                        <p className="text-gray-600">Description of your third feature goes here.</p>
                    </div>
                </div>
            </div>
        </main>
          <Footer/>
    </>
  )
}
