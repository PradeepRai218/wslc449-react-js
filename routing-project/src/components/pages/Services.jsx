import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Services() {
  return (
    <>
    

      <div>
        <div className="bg-gray-50 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">
              Our Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Design",
                  description: "Creating beautiful and responsive websites",
                },
                {
                  title: "Web Development",
                  description: "Building robust and scalable applications",
                },
                {
                  title: "Mobile Apps",
                  description: "Developing native and cross-platform apps",
                },
                {
                  title: "UI/UX Design",
                  description: "Designing intuitive user experiences",
                },
                {
                  title: "Consulting",
                  description: "Strategic tech consulting services",
                },
                {
                  title: "Support",
                  description: "24/7 technical support and maintenance",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h2 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
}
