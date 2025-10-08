import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id='contact' className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Let's start creating something amazing together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  required
                ></textarea>
              </motion.div>
              <motion.button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Our Office</p>
                <p className="text-gray-600">123 Creative Street, Design City, DC 12345</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Email</p>
                <p className="text-gray-600">hello@cwcreativeworld.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}