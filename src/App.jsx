// src/App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import AdvertisingDesign from './pages/AdvertisingDesign.jsx'
import Photography from './pages/Photography.jsx'
import RecordingServices from './pages/RecordingServices.jsx'
import VoiceServices from './pages/VoiceRecording.jsx'
import InteriorArchi from './pages/InteriorArchi.jsx'
import DesignServices from './pages/DesignServices.jsx'
import StatsSection from './sections/StatsSection.jsx'
import WebDevelopment from './pages/WebDevelopment.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import PortfolioSection from './sections/PortfolioSection.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import FooterSection from './sections/FooterSection.jsx'
import logo from './assets/logo.png'


function Home() {
  return (
    <>
      <main className="content">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-end'>
          <div className="logo-container ">
            <img src={logo} alt="CW Logo" className="h-60 w-100 mb-4 rounded-full" />
          </div>
          <div>
            <h1 className='text-gray-800 font-bold'>Where imagination never ends.</h1>
            <p>
              At CW Creative World, we transform your vision into reality<br/> 
              through innovative web development, modern design systems, <br/> 
              professional photography, architectural excellence, and interior design expertise.
            </p>
          </div>
        </div>
      </main>

      {/* Homepage sections */}
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      
      <AboutSection />
      <ContactSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  )
}

export default function App() {
  return (
    <div className="app-container">
  
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/AdvertisingDesign" element={<AdvertisingDesign />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/RecordingServices" element={<RecordingServices />} />
        <Route path="/VoiceServices" element={<VoiceServices />} />
        <Route path="/InteriorArchi" element={<InteriorArchi />} />
        <Route path="/DesignServices" element={<DesignServices />} />
      </Routes>
    </div>
  )
}
