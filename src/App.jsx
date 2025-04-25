import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./index.css";
import DashboardTemplate from "./components/molecules/Layout/DashboardTemplate";

import { Toaster } from "sonner";

import HomePage from "./pages/HomePage/page.jsx";
import AuthPage from "./pages/AuthPage/page.jsx";
import CountryDetailPage from "./pages/CountryDetail/[slug]";
import FavouritePage from "./pages/FavouritePage/page.jsx";
import ContactPage from "./pages/ContactUs/page.jsx";

const App = () => {
  return (
    <>
      <Toaster position="top-center" richColors />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardTemplate>
                <HomePage />
              </DashboardTemplate>
            }
          />

          <Route path="/auth" element={<AuthPage />} />

          <Route
            path="/country/:slug"
            element={
              <DashboardTemplate>
                <CountryDetailPage />
              </DashboardTemplate>
            }
          />
          <Route
            path="/favourites"
            element={
              <DashboardTemplate>
                <FavouritePage />
              </DashboardTemplate>
            }
          />
          <Route
            path="/contact"
            element={
              <DashboardTemplate>
                <ContactPage />
              </DashboardTemplate>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
