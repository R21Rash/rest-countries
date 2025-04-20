// services/favorite-service.js
import { db } from "../firebase";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";

const normalizeCountry = (country) => ({
  name: country.name?.common || country.name || "Unknown",
  capital: Array.isArray(country.capital)
    ? country.capital[0]
    : country.capital || "N/A",
  population: country.population || 0,
  flag: country.flags?.png || country.flag || "",
  cca3: country.cca3 || "",
});

export const addToFavorites = async (userId, country) => {
  const userRef = doc(db, "favorites", userId);
  const normalized = normalizeCountry(country);
  await setDoc(userRef, { countries: arrayUnion(normalized) }, { merge: true });
};

export const removeFromFavorites = async (userId, country) => {
  const userRef = doc(db, "favorites", userId);
  const snapshot = await getDoc(userRef);

  if (snapshot.exists()) {
    const current = snapshot.data().countries || [];

    const updated = current.filter((c) => c.cca3 !== country.cca3);

    await updateDoc(userRef, {
      countries: updated,
    });
  }
};

export const fetchFavorites = async (userId) => {
  const userRef = doc(db, "favorites", userId);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    return docSnap.data().countries || [];
  } else {
    return [];
  }
};

// 🔁 Real-time listener for favorites
export const listenToFavorites = (userId, callback) => {
  const userRef = doc(db, "favorites", userId);
  return onSnapshot(userRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data().countries || []);
    } else {
      callback([]);
    }
  });
};
