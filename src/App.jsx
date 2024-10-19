import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Navbar from "./Component/Navbar/Navbar"; // Navbar component
import Home from "./Component/Pages/Home"; // Home page component
import About from "./Component/Pages/About"; // About page component
import Contact from "./Component/Pages/Contact"; // Contact page component
import JoinUsForm from "./Component/Pages/Joinus"; // Join Us form page component
import Footer from "./Component/Footer/footer"; // Footer component

function App() {
  return (
    <Router>
      {/* Navbar is displayed on all pages */}
      <div className="Navbar">
        <Navbar />
      </div>

      {/* Routing section for pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/join" element={<JoinUsForm />} /> {/* Join Us page */}
      </Routes>

      {/* Footer is displayed on all pages */}
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;

