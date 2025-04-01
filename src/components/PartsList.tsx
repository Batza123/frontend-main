import React from "react";
import { parts } from "../data/parts";
import { Part } from "../types";
import { useCartStore } from "../store/cartStore";

const PartsList: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {parts.map((part: Part) => (
        <div key={part.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src={part.image} alt={part.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{part.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{part.description}</p>
            <p className="text-base font-bold mb-2">{part.price} лв.</p>
            <button
              onClick={() => addToCart(part)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Добави в количката
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartsList;
