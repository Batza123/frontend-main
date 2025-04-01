import React, { useEffect, useRef, useState } from 'react';
import { parts } from '../data/parts';
import { Part } from '../types';
import { useCartStore } from '../store/cartStore';

const Parts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  const addToCart = useCartStore((state) => state.addToCart);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // MATRIX EFFECT
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    const characters = 'PHONE-FIX';
    let hue = 0;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
      hue = (hue + 1) % 360;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => clearInterval(interval);
  }, []);

  const filteredParts = parts.filter((part: Part) =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredParts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentParts = filteredParts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative py-24 px-4 bg-black text-white min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-300">Части за iPhone</h2>

        <input
          type="text"
          placeholder="Търси по име или модел..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full max-w-md mx-auto block mb-8 p-3 rounded-lg bg-gray-900 text-white border border-gray-700"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentParts.map((part) => (
            <div
              key={part.id}
              className="relative group h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white drop-shadow">{part.name}</h3>
                  <p className="text-white/90 text-sm">{part.description}</p>
                  <p className="text-yellow-400 font-bold text-lg">{part.price} лв.</p>
                  <button
                    onClick={() => addToCart(part)}
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition animate-pulse"
                  >
                    Добави в количката
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
          >
            Назад
          </button>
          <span className="px-4 py-2">{currentPage} / {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
          >
            Напред
          </button>
        </div>
      </div>
    </section>
  );
};

export default Parts;
