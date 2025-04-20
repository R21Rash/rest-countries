// CountryCard.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, HeartStraight } from "@phosphor-icons/react";
import Button from "../../Atoms/Button/Button";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  addToFavorites,
  removeFromFavorites,
  fetchFavorites,
} from "../../../services/favorite-service";
import { toast } from "sonner";

const CountryCard = ({ country, isFavoritePage = false, onUnfavorite }) => {
  const name = country.name?.common || country.name || "Unknown";
  const capital = country.capital?.[0] || country.capital || "N/A";
  const flag = country.flags?.png || country.flag;
  const population = country.population || 0;
  const cca3 = country.cca3;
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  const [isFavorited, setIsFavorited] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const checkIfFavorited = async () => {
      if (user) {
        const favs = await fetchFavorites(user.uid);
        const found = favs.find((c) => c.cca3 === cca3);
        setIsFavorited(!!found);
      }
    };
    checkIfFavorited();
  }, [user, cca3]);

  const handleFavorite = async (e) => {
    e.preventDefault();
    if (!user) return alert("Login required to favorite!");

    const favCountry = {
      name,
      capital,
      population,
      flag,
      cca3,
    };

    try {
      if (isFavorited) {
        await removeFromFavorites(user.uid, favCountry);
        setIsFavorited(false);
        toast.success(`${name} removed from favorites.`);
        if (isFavoritePage && onUnfavorite) {
          onUnfavorite(favCountry);
        }
      } else {
        await addToFavorites(user.uid, favCountry);
        setIsFavorited(true);
        toast.success(`${name} added to favorites.`);
      }
    } catch (err) {
      console.error("Error updating favorites:", err);
    }
  };

  return (
    <Link to={`/country/${slug}`}>
      <div className="p-4 bg-white shadow-md rounded-md transition hover:shadow-lg">
        <img
          src={flag}
          alt={`${name} flag`}
          className="w-full h-32 object-cover mb-3 rounded"
        />

        <div className="flex justify-between items-start">
          <div className="pr-2">
            <h3 className="text-lg font-bold text-gray-800">
              {country.name?.common || country.name}
            </h3>
            <p className="text-sm text-gray-600">
              Capital:{" "}
              {Array.isArray(country.capital)
                ? country.capital?.[0]
                : country.capital || "N/A"}
            </p>
            <p className="text-sm text-gray-600">
              Population:{" "}
              {country.population?.toLocaleString?.() || country.population}
            </p>
          </div>

          <div className="flex-shrink-0">
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
      </div>
    </Link>
  );
};

export default CountryCard;
