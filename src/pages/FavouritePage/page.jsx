import { useEffect, useState } from "react";
import CountryCard from "../../components/molecules/CountryCard/CountryCard";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";
import { listenToFavorites } from "../../services/favorite-service";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../../components/Atoms/Loader/Loader";
import { Heart } from "@phosphor-icons/react";

const FavouritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        const stopListening = listenToFavorites(
          user.uid,
          (updatedFavorites) => {
            setFavorites(updatedFavorites);
            setLoading(false);
          }
        );
        return () => stopListening();
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <TitleCard title="Favourite Countries " />

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Loader />
        </div>
      ) : !isAuthenticated ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Please sign in to view your favorite countries 🔒
        </div>
      ) : favorites.length === 0 ? (
        <div className="text-center text-gray-500 mt-16 flex flex-col items-center justify-center">
          <Heart
            size={48}
            weight="fill"
            className="text-red-400 animate-pulse mb-4"
          />
          <p className="text-xl font-medium">No favorites yet!</p>
          <p className="text-sm text-gray-400 mt-1">
            Start exploring countries and click the ❤️ to save them here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              isFavoritePage={true}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FavouritePage;
