import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function About() {
  return (
    <div>
     
      <div className="bg-gray-50">
        {/* About Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are a dedicated team committed to delivering exceptional
              solutions and services to our clients worldwide.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div
                  key={member}
                  className="text-center bg-gray-50 p-6 rounded-lg"
                >
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Team Member {member}
                  </h3>
                  <p className="text-gray-600">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Client Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((review) => (
                <div key={review} className="bg-white p-6 rounded-lg shadow">
                  <p className="text-yellow-500 mb-2">★★★★★</p>
                  <p className="text-gray-600 mb-4">
                    "Great service and excellent support!"
                  </p>
                  <p className="font-bold text-gray-800">
                    Client Name {review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
     
    </div>
  );
}
