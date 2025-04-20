import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import DashboardTemplate from "./components/molecules/Layout/DashboardTemplate";
import HomePage from "./pages/HomePage/page.jsx";
import AuthPage from "./pages/AuthPage/page.jsx";
import CountryDetailPage from "./pages/CountryDetail/[slug]";
import FavouritePage from "./pages/FavouritePage/page.jsx";
import ContactPage from "./pages/ContactUs/page";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route
            path="/HomePage"
            element={
              <DashboardTemplate>
                <HomePage />
              </DashboardTemplate>
            }
          />
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
          contact
          <Route
            path="/contact"
            element={
              <DashboardTemplate>
                <ContactPage />
              </DashboardTemplate>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
