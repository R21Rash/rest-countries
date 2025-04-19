import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";
import SearchAndFilter from "../../components/molecules/SearchAndFilter/SearchAndFiler";
import { useFetchAllCountries } from "../../hooks/useCountries";

const HomePage = () => {
  const { data: countries, isLoading, isError } = useFetchAllCountries();

  useEffect(() => {
    console.log("-----> data", countries);
  }, [countries]);

  return (
    <>
      <TitleCard title="Explore Countries 🌍" />
      <SearchAndFilter />

      {isLoading && <p className="text-center">Loading countries...</p>}
      {isError && (
        <p className="text-center text-red-500">Failed to load data.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {countries &&
          countries.map((country) => {
            const slug = country.name.common.toLowerCase().replace(/\s+/g, "-");

            return (
              <Link to={`/country/${slug}`} key={country.cca3}>
                <div className="p-4 bg-white shadow rounded">
                  <img
                    src={country.flags?.png}
                    alt={country.name.common}
                    className="w-full h-32 object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold">
                    {country.name.common}
                  </h3>
                  <p>Capital: {country.capital?.[0]}</p>
                  <p>Population: {country.population}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default HomePage;
