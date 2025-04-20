import React from "react";
import { useParams } from "react-router-dom";
import { useCountryByTranslation } from "../../hooks/useCountries";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CommonCard from "../../components/Atoms/CommonCard/CommonCard";
import Loader from "../../components/Atoms/Loader/Loader";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const CountryDetailPage = () => {
  const { slug } = useParams();
  const formattedSlug = slug.replace(/-/g, " ");
  const { data, isLoading, isError } = useCountryByTranslation(formattedSlug);

  if (isLoading)
    return (
      <p className="text-center">
        <Loader />
      </p>
    );
  if (isError)
    return <p className="text-center text-red-500">Something went wrong 😢</p>;

  const country = data?.[0]; // API returns array

  return (
    <div className="max-w-6xl mx-auto">
      {/* 🌍 Flag and name centered */}
      <div className="text-center mb-8">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-40 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">{country.name.common}</h1>
        <p className="text-gray-600 italic">{country.name.official}</p>
      </div>

      {/* ✅ Main grid layout with 2/3 + 1/3 split */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Country info */}
        <div className="md:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base">
            <div>
              <p>
                <strong>Capital:</strong> {country.capital?.[0]}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country.subregion}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Area:</strong> {country.area.toLocaleString()} km²
              </p>
              <p>
                <strong>Timezones:</strong> {country.timezones?.join(", ")}
              </p>
              <p>
                <strong>Start of Week:</strong> {country.startOfWeek}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong> {country.tld?.join(", ")}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {Object.values(country.currencies || {})
                  .map((cur) => `${cur.name} (${cur.symbol})`)
                  .join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages || {}).join(", ")}
              </p>
              <p>
                <strong>Driving Side:</strong> {country.car?.side}
              </p>
              <p>
                <strong>Borders:</strong>{" "}
                {country.borders?.join(", ") || "None"}
              </p>
            </div>
          </div>

          {/* 🗺️ Map */}
          {country.latlng && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Location on Map</h2>
              <MapContainer
                center={country.latlng}
                zoom={4}
                scrollWheelZoom={false}
                style={{ height: "300px", width: "100%", borderRadius: "12px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={country.latlng}>
                  <Popup>{country.name.common}</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}

          {/* 🛡️ Coat of Arms */}
          {country.coatOfArms?.png && (
            <div className="mt-10">
              <h2 className="text-lg font-semibold mb-2">Coat of Arms</h2>
              <img
                src={country.coatOfArms.png}
                alt="Coat of arms"
                className="w-40"
              />
            </div>
          )}
        </div>

        {/* Right: 🌐 Translations */}
        <div>
          <h2 className="text-lg font-semibold mb-3">🌐 Translations</h2>
          <CommonCard>
            {Object.entries(country.translations || {}).map(
              ([langCode, value]) => (
                <div key={langCode} className="leading-tight">
                  <p>
                    <strong className="text-sm">
                      {langCode.toUpperCase()}
                    </strong>
                    : <span>{value.common}</span>
                  </p>
                  <p className="text-xs italic text-gray-500 mb-2">
                    {value.official}
                  </p>
                </div>
              )
            )}
          </CommonCard>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
