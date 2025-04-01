import React from "react";

const Terms: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-4">Общи условия</h1>
    <p className="mb-4">Настоящите условия уреждат използването на уебсайта и услугите на SmartFix. С достъпа до сайта Вие се съгласявате с тях.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. Услуги</h2>
    <p className="mb-4">Предлагаме продажба на части, ремонти и диагностика на мобилни устройства.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. Плащане</h2>
    <p className="mb-4">Всички плащания се извършват онлайн чрез защитени методи (напр. Stripe).</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Отговорност</h2>
    <p>Не носим отговорност за щети, причинени от неправилна употреба или неоторизирана намеса в устройствата.</p>
  </div>
);

export default Terms;
