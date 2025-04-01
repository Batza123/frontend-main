import React from "react";
import Lottie from "lottie-react";
import iphoneAnimation from "/iphone-animation.json";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Hero: React.FC = () => (
  <header
    id="hero"
    className="h-[65vh] flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-400 to-blue-600 pt-10 px-6 sm:px-12"
  >
    <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-md mb-4">
          Ремонт на iPhone, <br className="hidden sm:inline" />
          както трябва да бъде.
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 leading-relaxed mb-6">
          Бързо. Гарантирано. Без излишно чакане. <br />
          От диагностика до пълен ремонт – ние сме тук.
        </p>

        {/* ✅ BUTTONS FIXED BELOW */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/services"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow-md transition"
          >
            Виж услугите
          </Link>

          <HashLink
            smooth
            to="/#contact"
            className="text-white font-semibold text-lg hover:underline px-6 py-2 rounded transition"
          >
            Свържи се с нас →
          </HashLink>
        </div>
      </div>

      <div className="w-72 sm:w-96 md:w-[500px]">
        <Lottie animationData={iphoneAnimation} loop={true} />
      </div>
    </div>
  </header>
);

export default Hero;
