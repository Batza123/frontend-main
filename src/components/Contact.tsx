import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => (
  <section id="contact" className="py-24 bg-gray-950 text-white px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      {/* Contact Info */}
      <div className="flex-1 max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Свържете се с нас</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-red-500 text-xl" />
            <p className="text-gray-300 text-base">swipefilebatza@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaPhone className="text-green-500 text-xl" />
            <p className="text-gray-300 text-base">+359 89 566 0810</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <p className="text-gray-300 text-base">ул. "Цар Самуил" 45</p>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="flex-1 max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Работно време</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <ul className="text-gray-300 text-left space-y-4 text-base leading-relaxed">
            <li>Понеделник – Петък: 10:00 – 19:00</li>
            <li>Събота: 10:00 – 16:00</li>
            <li>Неделя: Почивен ден</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
