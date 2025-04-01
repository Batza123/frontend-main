import React from "react";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, clearCart, decreaseQuantity, addToCart } = useCartStore();
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">🛒 Вашата количка</h1>

        {items.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">Количката е празна.</p>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 rounded-xl shadow-md p-4 gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg border border-gray-700"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-300">
                        {item.price} лв. × {item.quantity} ={" "}
                        <span className="text-green-400 font-bold">{item.price * item.quantity} лв.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xl"
                    >
                      −
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xl"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 text-xl font-bold ml-4"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-800 p-6 rounded-xl shadow-inner flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xl font-bold text-white">
                Общо: <span className="text-yellow-400">{totalPrice.toFixed(2)} лв.</span>
              </p>
              <div className="flex gap-4">
                <Link
                  to="/checkout"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                >
                  Към плащане
                </Link>
                <button
                  onClick={clearCart}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                >
                  Изчисти количката
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
