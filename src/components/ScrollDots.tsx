import React from "react";

const ScrollDots: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {/* Hero Section Dot */}
      <button
        onClick={() => scrollTo("hero")}
        className="w-4 h-4 rounded-full bg-white"
        aria-label="Scroll to Hero"
      />

      {/* Contact Section Dot */}
      <button
        onClick={() => scrollTo("contact")}
        className="w-4 h-4 rounded-full bg-white/50 hover:bg-white transition"
        aria-label="Scroll to Contact"
      />
    </div>
  );
};

export default ScrollDots;
