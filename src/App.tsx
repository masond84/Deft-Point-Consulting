import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToHash } from "./utils/ScrollToHash"; // Import your utility
import ScrollToTop from "./components/layout/ScrollToTop"; // Adjust path as needed
import { Analytics } from "@vercel/analytics/react";
// Components
import  Header from './components/layout/Header';
import Footer  from './components/layout/Footer';
import Preloader from "./components/layout/Preloader"; // Import Preloader
// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import QuoteForm from './components/contact/QuoteForm';
// Service Pages
import CustomWebsiteDevelopment from './pages/subpages/CustomWebsiteDevelopment'; 
import MobileFirstDesign from './pages/subpages/MobileFirstDesign';
import WebsiteRedesign from './pages/subpages/WebsiteRedesign';
import MaintenancePlans from './pages/subpages/MaintenacePlans';
import Marketing from './pages/subpages/Marketing';
import DataServices from './pages/subpages/DataServices';
import AllProjects from './pages/AllProjects';
// Legal Pages
import PrivacyPolicy from './pages/legalpages/PrivacyPolicy';
import Terms from './pages/legalpages/Terms';
import Cookies from './pages/legalpages/Cookie';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Automatically scrolls to the top on route change */}
      <div className='bg-[#6E6E6E]'>
        {/* Preloader */}
        {/* <Preloader />*/}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<QuoteForm />} />
          <Route path="/services/custom-software-development" element={<CustomWebsiteDevelopment />} /> {/* New Route */}
          <Route path="/services/consulting" element={<MobileFirstDesign />} />
          <Route path="/services/website-design" element={< WebsiteRedesign/>} />
          <Route path="/services/website-maintenance-plans" element={<MaintenancePlans />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/data-solutions" element={<DataServices />} />
          <Route path="projects/all-projects" element={<AllProjects />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/cookie-policy" element={<Cookies />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
};

export default App;