import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, HeartStraight } from "@phosphor-icons/react";
import Button from "../../Atoms/Button/Button";

const CountryCard = ({ country, onFavorite }) => {
  const slug = country.name.common.toLowerCase().replace(/\s+/g, "-");
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e) => {
    e.preventDefault(); // Prevent Link navigation
    setIsFavorited((prev) => !prev);
    onFavorite && onFavorite(country);
  };

  return (
    <Link to={`/country/${slug}`}>
      <div className="p-4 bg-white shadow-md rounded-md transition hover:shadow-lg">
        {/* Flag */}
        <img
          src={country.flags?.png}
          alt={country.name.common}
          className="w-full h-32 object-cover mb-3 rounded"
        />

        {/* Text and heart side by side */}
        <div className="flex justify-between items-start">
          {/* Info on left */}
          <div>
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

          {/* Heart on right */}
          <Button
            onClick={handleFavorite}
            className="p-1 rounded-full"
            variant="ghost"
            icon={
              isFavorited ? (
                <HeartStraight
                  size={20}
                  weight="fill"
                  className="text-red-500"
                />
              ) : (
                <Heart size={20} weight="regular" className="text-gray-400" />
              )
            }
            label={null}
          />
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
