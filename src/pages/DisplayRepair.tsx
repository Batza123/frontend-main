
import React, { useState, useEffect } from "react";

const DisplayRepair: React.FC = () => {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem("displayRepairOpen");
    return saved === "true";
  });
  const [tab, setTab] = useState("form");
  const [model, setModel] = useState("");
  const [imei, setImei] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submittedAt, setSubmittedAt] = useState<Date | null>(null);

  useEffect(() => {
    localStorage.setItem("displayRepairOpen", isOpen.toString());
  }, [isOpen]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/api/repairs/submit-repair", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model,
          imei,
          description,
          type: "display",
        }),
      });

      if (res.ok) {
        console.log("✅ Заявката е записана успешно");
        setSubmitted(true);
        setSubmittedAt(new Date());
        setModel("");
        setImei("");
        setDescription("");
        setImages([]);
      } else {
        alert("Грешка при изпращане.");
      }
    } catch (err) {
      console.error("❌ Error submitting repair:", err);
      alert("Грешка при заявката.");
    }
  };

  const getEstimatedPrice = () => {
    if (!model) return null;
    const highEnd = ["Pro", "Pro Max"].some((x) => model.includes(x));
    return highEnd ? "Очаквана цена: 220–280 лв" : "Очаквана цена: 160–200 лв";
  };

  const getElapsedMinutes = () => {
    if (!submittedAt) return null;
    const now = new Date().getTime();
    const diff = Math.floor((now - submittedAt.getTime()) / 60000);
    return `${diff} минути`;
  };

  return (
    <div
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-10 font-sans"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      <div className="text-center mb-6 max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Счупен дисплей?
        </h1>
        <p className="text-white/80 text-sm sm:text-base">
          Поправи го бързо и качествено – избери модела си, опиши проблема и
          качи снимки. Ние ще се погрижим за останалото.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-white/20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gradient-to-r from-purple-800 to-blue-700 flex flex-col items-center justify-center p-6 hover:opacity-90 cursor-pointer"
        >
          <img
            src="/images/SFAQ-header-iphone-screen_2x-gray.png"
            alt="iPhone display illustration"
            className="w-20 h-20 object-contain mb-3"
          />
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Смяна на дисплей
            <span>{isOpen ? "⏶" : "⏷"}</span>
          </h2>
        </button>

        {isOpen && (
          <div>
            {!submitted ? (
              <>
                <div className="flex border-b border-white/10">
                  <button
                    className={`flex-1 p-3 text-center font-semibold ${tab === "form"
                      ? "bg-black/30 text-blue-400"
                      : "hover:bg-black/20"}`}
                    onClick={() => setTab("form")}
                  >
                    Заявка
                  </button>
                  <button
                    className={`flex-1 p-3 text-center font-semibold ${tab === "photos"
                      ? "bg-black/30 text-blue-400"
                      : "hover:bg-black/20"}`}
                    onClick={() => setTab("photos")}
                  >
                    Снимки
                  </button>
                </div>

                {tab === "form" ? (
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="block mb-1 text-sm font-semibold">
                        Модел на iPhone
                      </label>
                      <select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full p-3 rounded bg-white/90 text-black"
                        required
                      >
                        <option value="">Изберете модел</option>
                        {[
                          "iPhone X", "XR", "XS", "XS Max", "11", "11 Pro", "11 Pro Max",
                          "12", "12 Pro", "12 Pro Max", "13", "13 Pro", "13 Pro Max",
                          "14", "14 Pro", "14 Pro Max", "15", "15 Pro", "15 Pro Max",
                          "16", "16 Pro", "16 Pro Max",
                        ].map((m) => (
                          <option key={m}>{`iPhone ${m}`}</option>
                        ))}
                      </select>
                      {model && (
                        <p className="mt-1 text-sm text-green-300 font-medium">
                          💰 {getEstimatedPrice()}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-semibold">
                        IMEI номер
                      </label>
                      <input
                        type="text"
                        value={imei}
                        onChange={(e) => setImei(e.target.value)}
                        className="w-full p-3 rounded bg-white/10 text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-semibold">
                        Описание на проблема
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="w-full p-3 rounded bg-white/10 text-white"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-orange-500/30"
                    >
                      Изпрати заявка
                    </button>
                  </form>
                ) : (
                  <div className="p-6 space-y-4">
                    <label className="block mb-2 text-sm font-semibold">
                      Качи снимки на телефона
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="w-full bg-white/10 text-white p-2 rounded"
                    />

                    {images.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        {images.map((img, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(img)}
                            alt={`uploaded-${index}`}
                            className="w-full h-32 object-cover rounded border border-white/20"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  ✅ Заявката е приета!
                </h3>
                <ul className="text-sm text-white space-y-2">
                  <li>📩 Получена заявка</li>
                  <li>⏳ Очаквайте обаждане до 2 часа</li>
                  <li>🛠 Подготовка на частите</li>
                  <li>📦 Доставка / ремонт</li>
                </ul>
                {submittedAt && (
                  <p className="mt-4 text-xs text-white/70">
                    ⏱ Изминало време: {getElapsedMinutes()}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayRepair;
