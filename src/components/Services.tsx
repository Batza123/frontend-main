import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import displayIcon from "../assets/lottie/display-icon.json";
import batteryIcon from "../assets/lottie/battery-icon.json";
import softwareIcon from "../assets/lottie/software-icon.json";

const Services: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-purple-900 to-pink-900 opacity-20 pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Text & Testimonials */}
        <div className="text-left space-y-10">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Вашият iPhone заслужава най-доброто.
          </h2>
          <p className="text-lg text-gray-300">
            В SmartFix, не просто ремонтираме – възстановяваме сигурността, функционалността и увереността на вашето устройство. Ние използваме само оригинални части, предоставени от сертифицирани доставчици, а техниката ни се извършва от опитни професионалисти. Доверието ви е нашето най-голямо предимство.
          </p>

          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-white">
              <p className="text-white italic">“Смяната на дисплея беше супер бърза, а телефонът изглежда като нов! Препоръчвам с две ръце.”</p>
              <p className="mt-2 text-xs text-right text-white">– Георги Петров</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-white">
              <p className="text-white italic">“Професионално отношение и бърза реакция. Благодаря ви!”</p>
              <p className="mt-2 text-xs text-right text-white">– Ана Николова</p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {/* Смяна на дисплей */}
          <Link
            to="/display-repair"
            className="block bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <Lottie animationData={displayIcon} loop autoplay />
            </div>
            <h3 className="text-2xl font-semibold text-white text-center">Смяна на дисплей</h3>
            <p className="text-gray-300 text-center">Бърза и професионална подмяна на счупени дисплеи.</p>
          </Link>

          {/* Подмяна на батерия */}
          <Link
            to="/battery-repair"
            className="block bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <Lottie animationData={batteryIcon} loop autoplay />
            </div>
            <h3 className="text-2xl font-semibold text-white text-center">Подмяна на батерия</h3>
            <p className="text-gray-300 text-center">Оригинални батерии за дълъг живот.</p>
          </Link>

          {/* Софтуерни проблеми */}
          <Link
            to="/software-repair"
            className="block bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <Lottie animationData={softwareIcon} loop autoplay />
            </div>
            <h3 className="text-2xl font-semibold text-white text-center">Софтуерни проблеми</h3>
            <p className="text-gray-300 text-center">Решаваме проблеми с iOS, приложения и настройки.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
