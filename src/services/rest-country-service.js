//fetching all countries

export const fetchAllCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const countries = await response.json();

    return countries;
  } catch (error) {
    console.error("Error to fetch", error);
    throw error;
  }
};

export const fetchTheCountryByTranslation = async (string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/translation/${string}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch country by translation");
    }

    const country = await response.json();
    return country;
  } catch (error) {
    console.error("Error fetching country by translation:", error);
    throw error;
  }
};

export const fetchCountriesByName = async (name) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    if (!response.ok) {
      throw new Error("Failed to fetch country ");
    }

    const country = await response.json();
    return country;
  } catch (error) {
    console.error("Error fetching country:", error);
    throw error;
  }
};

export const fetchCountriesByRegion = async (region) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch country by region ");
    }

    const country = await response.json();
    return country;
  } catch (error) {
    console.error("Error fetching country by region:", error);
    throw error;
  }
};

export const fetchCountriesByLanguage = async (language) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/lang/${language}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch country by language ");
    }

    const country = await response.json();
    return country;
  } catch (error) {
    console.error("Error fetching country by language:", error);
    throw error;
  }
};
