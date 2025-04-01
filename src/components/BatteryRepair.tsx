import React, { useState } from "react";

const BatteryRepair: React.FC = () => {
  const [model, setModel] = useState("");
  const [imei, setImei] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ model, imei, description });
    alert("Заявката за батерия е изпратена успешно!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-200 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Заявка за смяна на батерия</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-xl space-y-6"
        data-aos="fade-up"
      >
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="model">
            Модел на iPhone
          </label>
          <select
            id="model"
            required
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
          >
            <option value="">Изберете модел</option>
            <option>iPhone X</option>
            <option>iPhone XR</option>
            <option>iPhone 11</option>
            <option>iPhone 12</option>
            <option>iPhone 13</option>
            <option>iPhone 14</option>
            <option>iPhone 15</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="imei">
            IMEI номер
          </label>
          <input
            id="imei"
            type="text"
            required
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Описание на проблема
          </label>
          <textarea
            id="description"
            required
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Изпрати заявка
        </button>
      </form>
    </div>
  );
};

export default BatteryRepair;
