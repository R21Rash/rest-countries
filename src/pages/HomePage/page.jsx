import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";
import SearchAndFilter from "../../components/molecules/SearchAndFilter/SearchAndFiler";
import Pagination from "../../components/molecules/Pagination/Pagination";
import { useFetchAllCountries } from "../../hooks/useCountries";

const ITEMS_PER_PAGE = 12;

const HomePage = () => {
  const { data: countries, isLoading, isError } = useFetchAllCountries();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on filter/search change
  }, [searchTerm, selectedRegion]);

  const filteredCountries =
    countries?.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRegion =
        selectedRegion === "All" || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    }) || [];

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const regionOptions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];

  return (
    <>
      <TitleCard title="Explore Countries 🌍" />
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        selectedRegion={selectedRegion}
        onRegionChange={(e) => setSelectedRegion(e.target.value)}
        regions={regionOptions}
      />

      {isLoading && <p className="text-center">Loading countries...</p>}
      {isError && (
        <p className="text-center text-red-500">Failed to load data.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {paginatedCountries.map((country) => {
          const slug = country.name.common.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link to={`/country/${slug}`} key={country.cca3}>
              <div className="p-4 bg-white shadow rounded">
                <img
                  src={country.flags?.png}
                  alt={country.name.common}
                  className="w-full h-32 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">{country.name.common}</h3>
                <p>Capital: {country.capital?.[0]}</p>
                <p>Population: {country.population.toLocaleString()}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HomePage;
