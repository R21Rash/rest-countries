// pages/FavouritePage/page.jsx
import { useEffect, useState } from "react";
import CountryCard from "../../components/Atoms/CountryCard/CountryCard";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";

const FavouritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

  return (
    <div className="p-6">
      <TitleCard title="Favourite Countries " />

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
