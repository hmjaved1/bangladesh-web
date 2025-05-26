import React from "react";

export default function AdminPanel({ divisions, setDivisions, language, t }) {
  return (
    <section className="fixed top-0 right-0 bg-white border p-4 w-64 h-screen shadow-lg overflow-auto">
      <h3 className="font-bold mb-4">{t("admin_panel")}</h3>
      <p className="text-sm text-gray-500">এখানে আপনি তথ্য সম্পাদনা ও ম্যানেজ করতে পারবেন।</p>
    </section>
  );
}