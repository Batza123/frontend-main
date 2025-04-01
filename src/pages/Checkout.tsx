import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const saveRes = await fetch(import.meta.env.VITE_API_URL + "/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items, total }),
      });

      if (!saveRes.ok) throw new Error("Неуспешно създаване на поръчка");

      if (form.paymentMethod === "card") {
        const stripeRes = await fetch(import.meta.env.VITE_API_URL + "/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: items.map((item) => ({
              name: item.name,
              price: item.price,
              quantity: item.quantity,
            })),
          }),
        });

        const data = await stripeRes.json();
        if (data.url) {
          clearCart();
          window.location.href = data.url;
        } else {
          alert("⚠️ Проблем със Stripe.");
        }
        return;
      }

      clearCart();
      navigate("/success");
    } catch (error) {
      console.error("Order error:", error);
      alert("⚠️ Грешка при изпращане на поръчка.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Завършване на поръчка</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Лична информация */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Данни за контакт</h3>

            <input
              name="name"
              placeholder="Име и фамилия"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <input
              name="email"
              placeholder="Имейл"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <input
              name="phone"
              placeholder="Телефон"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <input
              name="address"
              placeholder="Адрес за доставка"
              value={form.address}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />

            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white"
            >
              <option value="cash">💵 Наложен платеж</option>
              <option value="card">💳 Плащане с карта</option>
            </select>
          </div>

          {/* Преглед на поръчката */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-inner h-fit">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Преглед на поръчката</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} × {item.quantity}</span>
                  <span>{item.price * item.quantity} лв.</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between text-lg font-bold">
              <span>Общо:</span>
              <span>{total.toFixed(2)} лв.</span>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition text-center"
            >
              Потвърди поръчката
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
