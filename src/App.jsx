import './App.css'
import Navbar from './components/Navbar.jsx'
import StatsSection from './sections/StatsSection.jsx'
import WebDevelopment from './pages/WebDevelopment.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import PortfolioSection from './sections/PortfolioSection.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import FooterSection from './sections/FooterSection.jsx'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="app-container">
      {/* Gradient background */}
      <div className="animated-gradient"></div>

      {/* Page content */}
      <Navbar />
      
      <main className="content">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-end'>
     <div className="logo-container "><img src={logo} alt="CW Logo" className="h-60 w-100 mb-4 rounded-full" /></div>
   
       <div>
        
        <h1 className='text-gray-800 font-bold'>Where imagination never ends.</h1>
        <p>
          At CW Creative World, we transform your vision into reality<br/> through innovative web
          development, modern design systems, <br/> professional photography, architectural excellence,
          and interior design expertise.
        </p>
    
       </div>
        </div>
         </main>
      {/* Stats Section */}
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
