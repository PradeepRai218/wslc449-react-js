import React from 'react'

export default function Footer() {

    return (
        <div className="bg-gray-800 text-white py-10">
            <div className="container max-w-[1320px] mx-auto flex justify-between">
                <div className="flex-1">
                    <h5 className="font-bold">About Us</h5>
                    <p>Learn more about our company and values.</p>
                </div>
                <div className="flex-1">
                    <h5 className="font-bold">Services</h5>
                    <p>Explore the services we offer to our clients.</p>
                </div>
                <div className="flex-1">
                    <h5 className="font-bold">Contact</h5>
                    <p>Get in touch with us for inquiries.</p>
                </div>
                <div className="flex-1">
                    <h5 className="font-bold">Follow Us</h5>
                    <p>Stay connected through our social media channels.</p>
                </div>
            </div>
        </div>
    )

}
