import { useQuery } from "@tanstack/react-query";
import { fetchAllCountries } from "../services/rest-country-service";

export const useFetchAllCountries = () => {
  return useQuery({
    queryKey: ["all-countries"],
    queryFn: fetchAllCountries,
    staleTime: 1000 * 60 * 5,
  });
};
