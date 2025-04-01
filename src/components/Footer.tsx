import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => (
  <footer className="bg-gradient-to-r from-purple-800 via-indigo-900 to-blue-800 text-white text-center py-6">
    <p className="text-sm">© 2024 SmartFix. Всички права запазени.</p>
    <div className="mt-2 space-x-4 text-sm">
      <Link to="/privacy" className="hover:underline">Политика за поверителност</Link>
      <Link to="/terms" className="hover:underline">Общи условия</Link>
      <Link to="/returns" className="hover:underline">Връщане</Link>
    </div>
  </footer>
);

export default Footer;
