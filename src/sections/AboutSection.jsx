import React from 'react';

export default function AboutSection() {
  return (
    <section id='about' className="py-20 px-4 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Our Creative Studio</h2>
            <p className="text-gray-600 text-lg mb-6">
              We are a passionate team of designers, developers, and creative thinkers dedicated to bringing innovative ideas to life. With years of experience and a portfolio of successful projects, we help businesses transform their digital presence.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our mission is to create exceptional experiences that inspire and engage audiences worldwide.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-xl">
              Learn More About Us
            </button>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold text-blue-600">10+</p>
              <p className="text-gray-600 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}