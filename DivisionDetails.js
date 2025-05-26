import React, { useState } from "react";

export default function DivisionDetails({ division, onBack, language, t, adminMode }) {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedThana, setSelectedThana] = useState(null);

  return (
    <section className="bg-white p-6 rounded shadow">
      <button onClick={onBack} className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">{t("back")}</button>
      <h3 className="text-2xl font-bold mb-4">{language === "bn" ? division.name_bn : division.name_en}</h3>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">জেলাসমূহ / Districts</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside cursor-pointer">
          {division.districts.map((district, idx) => (
            <li key={idx} onClick={() => { setSelectedDistrict(district); setSelectedThana(null); }} className="hover:text-green-600">
              {language === "bn" ? district.name_bn : district.name_en}
            </li>
          ))}
        </ul>
      </div>
      {selectedDistrict && (
        <div className="mb-6">
          <h5 className="font-semibold mb-2">{language === "bn" ? selectedDistrict.name_bn : selectedDistrict.name_en} - থানাসমূহ</h5>
          <ul className="list-disc list-inside cursor-pointer">
            {selectedDistrict.thanas.map((thana, idx) => (
              <li key={idx} onClick={() => setSelectedThana(thana)} className="hover:text-green-600">
                {language === "bn" ? thana.name_bn : thana.name_en}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedThana && (
        <div>
          <h6 className="font-semibold mb-3">{language === "bn" ? selectedThana.name_bn : selectedThana.name_en} - ভ্রমণযোগ্য স্থানসমূহ</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedThana.spots.map((spot, idx) => (
              <div key={idx} className="border rounded shadow p-3 bg-green-50">
                <img src={spot.image} alt={language === "bn" ? spot.name_bn : spot.name_en} className="w-full h-40 object-cover rounded mb-2" />
                <h4 className="font-semibold">{language === "bn" ? spot.name_bn : spot.name_en}</h4>
                <p className="text-sm">{language === "bn" ? spot.description_bn : spot.description_en}</p>
                <p className="text-xs mt-1 font-mono">{spot.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}