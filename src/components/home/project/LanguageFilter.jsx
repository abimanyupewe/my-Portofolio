import React from 'react'

const LanguageFilter = ({ filtersLanguage, setFiltersLanguage }) => {
    const languageOptions = ["JavaScript","Dart"];

  return (
<div className="space-y-2 p-2 bg-gray-100 border">
      {languageOptions.map((language, index) => (
        <label key={index} className="flex items-center">
          <input
            type="checkbox"
            checked={filtersLanguage.includes(language)}
            onChange={() => {
              if (filtersLanguage.includes(language)) {
                // Hapus bahasa dari filter jika sudah ada
                setFiltersLanguage(filtersLanguage.filter((item) => item !== language));
              } else {
                // Tambahkan bahasa ke filter jika belum ada
                setFiltersLanguage([...filtersLanguage, language]);
              }
            }}
            className="mr-2"
          />
          {language}
        </label>
      ))}
    </div>
  )
}

export default LanguageFilter
