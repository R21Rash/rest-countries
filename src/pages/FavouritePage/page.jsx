import { useEffect, useState } from "react";
import CountryCard from "../../components/molecules/CountryCard/CountryCard";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";
import { listenToFavorites } from "../../services/favorite-service";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../../components/Atoms/Loader/Loader";

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
            setLoading(false); // ✅ Set loading to false after data comes in
          }
        );
        return () => stopListening();
      } else {
        setIsAuthenticated(false);
        setLoading(false); // ✅ Stop loading even if user is not signed in
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <TitleCard title="Favourite Countries 💖" />

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Loader />
        </div>
      ) : !isAuthenticated ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Please sign in to see your favorite countries 🔒
        </div>
      ) : favorites.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          You haven’t added any favorites yet 💔
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
