// components/Atoms/CountryCard/CountryCard.jsx
import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={country.flags?.png}
        alt={`${country.name.common} flag`}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        {country.name.common}
      </h3>
      <p className="text-sm text-gray-600">
        <strong>Region:</strong> {country.region}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryCard;
