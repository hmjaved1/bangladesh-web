import React, { useState } from "react";
import divisionsData from "./data/divisionsData";
import { translations } from "./data/translations";
import Home from "./components/Home";
import DivisionDetails from "./components/DivisionDetails";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  const [language, setLanguage] = useState("bn");
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [adminMode, setAdminMode] = useState(false);
  const t = (key) => translations[language][key] || key;

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">বাংলাদেশ ট্রাভেল</h1>
        <p className="text-gray-600">{t("description")}</p>
        <div className="mt-3 flex justify-center space-x-4">
          <button className={language === "bn" ? "bg-green-700 text-white px-3 py-1 rounded" : "px-3 py-1 rounded bg-white"} onClick={() => setLanguage("bn")}>বাংলা</button>
          <button className={language === "en" ? "bg-green-700 text-white px-3 py-1 rounded" : "px-3 py-1 rounded bg-white"} onClick={() => setLanguage("en")}>English</button>
          <button className={adminMode ? "bg-red-600 text-white px-3 py-1 rounded" : "px-3 py-1 rounded bg-white"} onClick={() => setAdminMode(!adminMode)}>{adminMode ? "Admin Mode" : "User Mode"}</button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto">
        {!selectedDivision ? (
          <Home divisions={divisionsData} onSelectDivision={setSelectedDivision} language={language} t={t} />
        ) : (
          <DivisionDetails division={selectedDivision} onBack={() => setSelectedDivision(null)} language={language} t={t} adminMode={adminMode} setDivision={setSelectedDivision} />
        )}
        {adminMode && (
          <AdminPanel divisions={divisionsData} setDivisions={setSelectedDivision} language={language} t={t} />
        )}
      </main>
    </div>
  );
}