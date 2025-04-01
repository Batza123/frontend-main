
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Parts from "./pages/Parts";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import BatteryRequest from "./pages/BatteryRequest";
import DisplayRepair from "./pages/DisplayRepair";
import SoftwareRepair from "./pages/SoftwareRepair";
import SellPhone from "./pages/SellPhone";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";
import AdminDashboard from "./pages/AdminDashboard"; // Оправеният import

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setNavVisible(window.scrollY < lastScrollY || window.scrollY < 10);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} navVisible={navVisible} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/battery-repair" element={<BatteryRequest />} />
          <Route path="/display-repair" element={<DisplayRepair />} />
          <Route path="/software-repair" element={<SoftwareRepair />} />
          <Route path="/sell-phone" element={<SellPhone />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/returns" element={<Returns />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;
