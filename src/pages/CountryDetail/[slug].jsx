// src/pages/CountryDetail/[slug].jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetailPage = () => {
  const { slug } = useParams();
  const [country, setCountry] = useState(null);

  console.log("-> slug", slug);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/translation/${slug}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((err) => console.error("Error fetching country", err));
  }, [slug]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{country.name.common}</h1>
      <img src={country.flags?.png} alt="flag" className="w-32 my-4" />
      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
    </div>
  );
};

export default CountryDetailPage;
