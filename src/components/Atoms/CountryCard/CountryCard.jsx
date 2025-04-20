import React from "react";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${slug}`}>
      <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-full h-32 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-bold text-gray-800">
          {country.name?.common || country.name}
        </h3>
        <p className="text-sm text-gray-600">
          Capital:{" "}
          {Array.isArray(country.capital)
            ? country.capital?.[0]
            : country.capital || "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          Population:{" "}
          {country.population?.toLocaleString?.() || country.population}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
