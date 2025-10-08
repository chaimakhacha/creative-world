// src/App.jsx
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import AdvertisingDesign from './pages/AdvertisingDesign.jsx'
import Photography from './pages/Photography.jsx'
import Communication from './pages/Communication.jsx'
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

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <PageTransition>
      <main className="content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-end">
          <div className="logo-container">
            <img src={logo} alt="CW Logo" className="h-60 w-100 mb-4 rounded-full" />
          </div>
          <div>
            <h1 className="text-gray-800 font-bold">Where imagination never ends.</h1>
            <p className="text-gray-600 mt-4">
              At CW Creative World, we transform your vision into reality<br />
              through innovative web development, modern design systems,<br />
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
    </PageTransition>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/WebDevelopment" element={<PageTransition><WebDevelopment /></PageTransition>} />
          <Route path="/AdvertisingDesign" element={<PageTransition><AdvertisingDesign /></PageTransition>} />
          <Route path="/Photography" element={<PageTransition><Photography /></PageTransition>} />
          <Route path="/Communication" element={<PageTransition><Communication /></PageTransition>} />
          <Route path="/RecordingServices" element={<PageTransition><RecordingServices /></PageTransition>} />
          <Route path="/VoiceServices" element={<PageTransition><VoiceServices /></PageTransition>} />
          <Route path="/InteriorArchi" element={<PageTransition><InteriorArchi /></PageTransition>} />
          <Route path="/DesignServices" element={<PageTransition><DesignServices /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
