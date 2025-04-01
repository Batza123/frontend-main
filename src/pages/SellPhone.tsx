import React, { useState, FormEvent } from "react";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import phoneLottie from "../assets/lottie/phone-gradient.json";

const SellPhone: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    model: "",
    imei: "",
    condition: "",
    expectedPrice: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const required = ["model", "imei", "condition", "name", "phone", "email"];
    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        alert("Моля, попълнете всички задължителни полета.");
        return;
      }
    }

    const emailParams = {
      ...formData,
      to_email: "xdbatza2p@gmail.com",
    };

    emailjs
      .send("service_02z97za", "template_mifzi4h", emailParams, "agrLyKnz58Ldt4rrf")
      .then(() => {
        fetch(import.meta.env.VITE_API_URL + "/api/sell-request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("✅ Sell request saved:", data);
            alert("Заявката е изпратена успешно!");
            setFormData({
              model: "",
              imei: "",
              condition: "",
              expectedPrice: "",
              name: "",
              phone: "",
              email: "",
              message: "",
            });
            setImage(null);
          })
          .catch((err) => {
            console.error("❌ Error saving sell request:", err);
            alert("Грешка при запазване в базата.");
          });
      })
      .catch((err) => {
        console.error("❌ Error sending email:", err);
        alert("Грешка при изпращане на имейл.");
      });
  };

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-[#ff6a00] via-[#d7263d] to-[#1f0f2f] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Right */}
        <div className="flex flex-col items-center justify-start space-y-6">
          <Lottie animationData={phoneLottie} loop autoplay className="w-72" />
          <div className="text-center max-w-md space-y-5 text-base md:text-lg leading-relaxed text-white">
            <p>
              📱 За да намерите IMEI номера на вашия iPhone, отидете в <b>Настройки</b> → <b>Общи</b> → <b>Информация</b>.
            </p>
            <p className="font-bold text-xl">Най-добрите оферти. Без излишно чакане.</p>
            <p>Купуваме 99% от устройствата — бързо, лесно и прозрачно.</p>
            <p className="font-semibold text-lg">Нашият екип гарантира:</p>
            <ul className="text-left space-y-2">
              <li>🚫 Без безкрайни преговори</li>
              <li>🔥 Най-добрите пазарни цени</li>
              <li>💵 Моментално одобрение и изплащане</li>
            </ul>
            <p className="italic">
              Не купуваме само телефони с водни повреди или неремонтируеми дефекти.
            </p>
          </div>
        </div>

        {/* Left */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Продайте вашия iPhone</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1">Модел на iPhone</label>
              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
              >
                <option value="">Изберете модел</option>
                {["X", "XR", "XS", "11", "12", "13", "14", "15", "16"].flatMap(
                  (m) => [
                    `iPhone ${m}`,
                    `iPhone ${m} Pro`,
                    `iPhone ${m} Pro Max`,
                  ]
                ).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1">IMEI номер</label>
              <input
                type="text"
                name="imei"
                value={formData.imei}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>

            <div>
              <label className="block mb-1">Описание на състоянието</label>
              <textarea
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                rows={4}
              />
            </div>

            <div>
              <label className="block mb-1">Качете снимка (по избор)</label>
              <input
                type="file"
                className="w-full"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </div>

            <div>
              <label className="block mb-1">Очаквана цена (по избор)</label>
              <input
                type="number"
                name="expectedPrice"
                value={formData.expectedPrice}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Име</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                />
              </div>
              <div>
                <label className="block mb-1">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Имейл</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>

            <div>
              <label className="block mb-1">Съобщение (по избор)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-black/60 hover:bg-black/80 p-3 rounded text-white font-semibold transition"
            >
              Изпрати заявка
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellPhone;
