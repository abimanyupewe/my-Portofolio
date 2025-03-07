import React from "react";

const colorMapping = {
  categoryProject: {
    "Website": { bg: "bg-blue-100", text: "text-blue-800" },
    "App": { bg: "bg-green-100", text: "text-green-800" },
    "UI/UX Design": { bg: "bg-purple-100", text: "text-purple-800" },
  },
  language: {
    "JavaScript": { bg: "bg-yellow-100", text: "text-yellow-800" },
    "Python": { bg: "bg-blue-100", text: "text-blue-800" },
    "Dart": { bg: "bg-red-100", text: "text-red-800" },
  },
  status: {
    "Selesai": { bg: "bg-green-100", text: "text-green-800" },
    "Progres": { bg: "bg-yellow-100", text: "text-yellow-800" },
    "Kolaborasi": { bg: "bg-purple-100", text: "text-purple-800" },
  },
};

const Badge = ({ type, value }) => {
  // Ambil warna dari colorMapping berdasarkan type dan value
  const colors = colorMapping[type]?.[value] || { bg: "bg-gray-100", text: "text-gray-800" };

  return (
    <span className={`inline-block px-2 py-1 rounded-sm text-sm ${colors.bg} ${colors.text}`}>
      {value}
    </span>
  );
};

export default Badge;