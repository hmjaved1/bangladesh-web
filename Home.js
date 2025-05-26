import React from "react";

export default function Home({ divisions, onSelectDivision, language, t }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">{t("popular_spots")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {divisions.slice(0, 8).map((division, idx) => (
          <button
            key={idx}
            onClick={() => onSelectDivision(division)}
            className="bg-white shadow p-3 rounded hover:bg-green-100"
          >
            {language === "bn" ? division.name_bn : division.name_en}
          </button>
        ))}
      </div>
    </section>
  );
}