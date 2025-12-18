import React from 'react'
import Header from '../common/Header'
import { Link } from 'react-router'

export default function Errror404() {
  return (
    <div>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
                <p className="text-gray-500 mt-2 mb-8">Sorry, the page you're looking for doesn't exist.</p>
                <Link to={'/'} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    Go Home
                </Link>
            </div>
        </div>
    </div>
  )
}
