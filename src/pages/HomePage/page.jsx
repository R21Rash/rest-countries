// HomePage.jsx
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
import CountryCard from "../../components/molecules/CountryCard/CountryCard";
import { auth } from "../../firebase";

const ITEMS_PER_PAGE = 12;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
      <TitleCard title="Explore Countries " />

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
        {paginatedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} user={user} />
        ))}
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
