import React from "react";

const FilterCheckbox = ({ filters, setFilters }) => {
  const statusOptions = ["Terbaru", "Kolaborasi", "Progres", "Selesai"];

  return (

    <div className="space-y-2 p-2 bg-gray-100 border">
      {statusOptions.map((status, index) => (
        <label key={index} className="flex items-center">
          <input
            type="checkbox"
            checked={filters.includes(status)}
            onChange={() => {
              if (filters.includes(status)) {
                setFilters(filters.filter((item) => item !== status));
              } else {
                setFilters([...filters, status]);
              }
            }}
            className="mr-2"
          />
          {status}
        </label>
      ))}
    </div>

  );
};

export default FilterCheckbox;