import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToHash } from "./utils/ScrollToHash"; // Import your utility
// Components
import  Header from './components/layout/Header';
import Footer  from './components/layout/Footer';
// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import QuoteForm from './components/contact/QuoteForm';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className='bg-[#6E6E6E]'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<QuoteForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;