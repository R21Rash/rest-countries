import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountryCard from "../../components/molecules/CountryCard/CountryCard";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";
import { listenToFavorites } from "../../services/favorite-service";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../../components/Atoms/Loader/Loader";
import { Heart, Lock, ArrowLeft } from "@phosphor-icons/react";
import Button from "../../components/Atoms/Button/Button";

const FavouritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

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
        <div className="flex flex-col items-center justify-center text-center mt-20 text-gray-500">
          {/* 🔒 Lock Icon */}
          <Lock size={60} weight="duotone" className="text-gray-400 mb-6" />

          <p className="text-xl font-semibold mb-2">
            Please sign in to view your favorite countries
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              icon={<ArrowLeft size={18} />} // ✅ Correct way
              label="Back to Home"
              variant="outlineGray"
              onClick={() => navigate("/HomePage")}
            />
            <Button label="Login" onClick={() => navigate("/auth")} />
          </div>
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
