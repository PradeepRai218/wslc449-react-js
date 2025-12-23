import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Contact() {
  return (
    <>
       
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="contact-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    <div className="info-item mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                        <p className="text-gray-600">123 Main Street, City, State 12345</p>
                    </div>
                    <div className="info-item mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">contact@example.com</p>
                    </div>
                    <div className="info-item">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                </div>

                <div className="contact-right">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            required 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows="5" 
                            required 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        ></textarea>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    </>
  )
}
