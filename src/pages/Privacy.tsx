import React from "react";

const Privacy: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-4">Политика за поверителност</h1>
    <p className="mb-4">SmartFix уважава Вашата поверителност и се ангажира да защитава личната Ви информация. Тази политика обяснява какви лични данни събираме, защо ги събираме и как ги използваме.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. Какви данни събираме</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Име и фамилия</li>
      <li>Имейл адрес и телефон</li>
      <li>Данни за поръчка и ремонт</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. Как използваме Вашите данни</h2>
    <p className="mb-4">Използваме данните, за да изпълняваме поръчки, да се свързваме с Вас и да подобряваме нашите услуги.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Споделяне на информация</h2>
    <p className="mb-4">Ние не продаваме и не споделяме Вашите лични данни с трети страни, освен ако това не е необходимо за изпълнение на услуга.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">4. Сигурност</h2>
    <p>Прилагаме подходящи технически и организационни мерки за защита на Вашите данни.</p>
  </div>
);

export default Privacy;
