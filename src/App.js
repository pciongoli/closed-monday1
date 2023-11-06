// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import About from "./components/About";
import Careers from "./components/Careers";
import "./App.css";

function App() {
   return (
      <Router>
         <NavBar />
         <div className="app-container">
            <div className="main-content">
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/careers" element={<Careers />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
