import React from "react";

const Returns: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-4">Политика за връщане</h1>
    <p className="mb-4">Нашата политика за връщане е валидна в рамките на 14 дни от датата на покупка. За да бъде върнат артикулът, той трябва да бъде в оригинално състояние.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. Условия за връщане</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Неповреден и неизползван продукт</li>
      <li>Оригинална опаковка и касов бон</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. Невъзстановими артикули</h2>
    <p className="mb-4">Услуги по ремонт не подлежат на връщане след тяхното извършване.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Възстановяване на суми</h2>
    <p>При одобрено връщане, възстановяването става по същия метод на плащане в срок до 7 работни дни.</p>
  </div>
);

export default Returns;
