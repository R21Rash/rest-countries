import { useQuery } from "@tanstack/react-query";
import {
  fetchAllCountries,
  fetchTheCountryByTranslation,
  fetchCountriesByName,
  fetchCountriesByRegion,
  fetchCountriesByLanguage,
} from "../services/rest-country-service";

// Get all countries
export const useFetchAllCountries = () => {
  return useQuery({
    queryKey: ["all-countries"],
    queryFn: fetchAllCountries,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });
};

// Get country by translated name
export const useCountryByTranslation = (countryName) => {
  return useQuery({
    queryKey: ["country-translation", countryName],
    queryFn: () => fetchTheCountryByTranslation(countryName),
    enabled: !!countryName,
    staleTime: 1000 * 60 * 10,
  });
};

// Search country by name
export const useCountrySearch = (name) => {
  return useQuery({
    queryKey: ["search-country", name],
    queryFn: () => fetchCountriesByName(name),
    enabled: !!name,
    staleTime: 1000 * 60 * 5,
    onSuccess: (data) => console.log("Fetched search data:", data),
  });
};

// search country by region
export const useCountryByRegion = (region) => {
  return useQuery({
    queryKey: ["country-by-region", region],
    queryFn: () => fetchCountriesByRegion(region),
    enabled: !!region && region !== "All", // avoids calling when "All"
    staleTime: 1000 * 60 * 5, // 5 mins
    onSuccess: (data) => console.log("Fetched region data:", data),
  });
};

// search country by language
export const useCountryByLanguage = (language) => {
  return useQuery({
    queryKey: ["country-by-language", language],
    queryFn: () => fetchCountriesByLanguage(language),
    enabled: !!language && language !== "All", // avoids calling when "All"
    staleTime: 1000 * 60 * 5, // 5 mins
    onSuccess: (data) => console.log("Fetched language  data:", data),
  });
};
