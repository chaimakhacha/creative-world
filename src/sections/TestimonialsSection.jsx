import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "CW Creative World transformed our digital presence completely. Their attention to detail and creative approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "Working with this team was an absolute pleasure. They delivered exceptional results within our timeline and budget.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "Working with this team was an absolute pleasure. They delivered exceptional results within our timeline and budget.",
      rating: 5
    }
     

  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Client Feedback</h2>
          <p className="text-lg text-gray-600">What our clients say about us</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}