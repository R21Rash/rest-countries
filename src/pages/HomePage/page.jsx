import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";
import SearchAndFilter from "../../components/molecules/SearchAndFilter/SearchAndFiler";
import Pagination from "../../components/molecules/Pagination/Pagination";
import {
  useFetchAllCountries,
  useCountrySearch,
  useCountryByRegion,
  useCountryByLanguage,
} from "../../hooks/useCountries";
import Loader from "../../components/Atoms/Loader/Loader";

const ITEMS_PER_PAGE = 12;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  // 🔀 Decide query source
  const {
    data: countries,
    isLoading,
    isError,
  } = searchTerm !== ""
    ? useCountrySearch(searchTerm)
    : selectedRegion !== "All"
    ? useCountryByRegion(selectedRegion)
    : selectedLanguage !== "All"
    ? useCountryByLanguage(selectedLanguage)
    : useFetchAllCountries();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRegion, selectedLanguage]);

  // 🧠 Pagination logic
  const paginatedCountries =
    countries?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    ) || [];

  const totalPages = Math.ceil((countries?.length || 0) / ITEMS_PER_PAGE);

  const regionOptions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];

  const languageOptions = [
    "All",
    "english",
    "french",
    "spanish",
    "arabic",
    "german",
    "chinese",
    "russian",
    "japanese",
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
        selectedLanguage={selectedLanguage}
        onLanguageChange={(e) => setSelectedLanguage(e.target.value)}
        languages={languageOptions}
      />

      {isLoading && (
        <div className="text-center my-10">
          <Loader />
        </div>
      )}

      {isError && (
        <p className="text-center text-red-500">Failed to load data.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {paginatedCountries.map((country) => {
          const slug = country.name.common.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link to={`/country/${slug}`} key={country.cca3}>
              <div className="p-4 bg-white shadow-md rounded-md transition hover:shadow-lg">
                <img
                  src={country.flags?.png}
                  alt={country.name.common}
                  className="w-full h-32 object-cover mb-3 rounded"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {country.name.common}
                </h3>
                <p className="text-sm text-gray-600">
                  Capital: {country.capital?.[0] || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Population: {country.population.toLocaleString()}
                </p>
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
