import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section id="whyus" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white font-bold mb-6">Защо да изберете SmartFix?</h2>
        <p className="text-lg mb-12 text-gray-300">
          Ние не просто поправяме телефони — ние възстановяваме надеждността им.
          С бърза реакция, прецизна диагностика и най-висококачествени части,
          гарантираме резултат, който заслужаваш.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-red-400/30 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">6 Месеца Гаранция</h3>
            <p className="text-gray-200">
              Всички ремонти идват с до 6 месеца гаранция — без допълнително заплащане.
              Това е нашият ангажимент към качество.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-blue-400/30 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">Без компромис с части</h3>
            <p className="text-gray-200">
              Използваме само проверени части и работим с внимание към всеки детайл.
              Телефонът ти заслужава най-доброто.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-yellow-400/30 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">Изключения от гаранцията</h3>
            <p className="text-gray-200">
              Гаранцията не важи при намеса от потребител, водна повреда или ако устройството
              е счупено от изпускане. Но ние винаги сме тук да помогнем!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
