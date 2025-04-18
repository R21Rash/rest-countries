// components/Card/CountryCard.jsx
const CountryCard = ({ country }) => (
  <div className="p-4 border rounded shadow-sm hover:shadow-lg">
    <img
      src={country.flags.png}
      alt={`${country.name.common} flag`}
      className="w-full h-32 object-cover mb-2 rounded"
    />
    <h2 className="text-xl font-bold">{country.name.common}</h2>
    <p>
      <strong>Capital:</strong> {country.capital}
    </p>
    <p>
      <strong>Region:</strong> {country.region}
    </p>
    <p>
      <strong>Population:</strong> {country.population.toLocaleString()}
    </p>
  </div>
);
export default CountryCard;
