import { useQuery } from "@tanstack/react-query";
import {
  fetchAllCountries,
  fetchTheCountryByTranslation,
  fetchCountriesByName,
} from "../services/rest-country-service";

export const useFetchAllCountries = () => {
  return useQuery({
    queryKey: ["all-countries"],
    queryFn: fetchAllCountries,
    staleTime: 1000 * 60 * 5,
  });
};

export const useCountryByTranslation = (countryName) => {
  return useQuery({
    queryKey: ["country-translation", countryName],
    queryFn: () => fetchTheCountryByTranslation(countryName),
    enabled: !!countryName, // avoids running on undefined
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useCountrySearch = (name) =>
  useQuery(["search-country", name], () => fetchCountriesByName(name), {
    enabled: !!name, // only run when `name` is not empty
    staleTime: 5 * 60 * 1000,
  });
