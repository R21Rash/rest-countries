import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";

import DashboardTemplate from "./components/molecules/Layout/DashboardTemplate";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

import HomePage from "./pages/HomePage/page.jsx";
import AuthPage from "./pages/AuthPage/page.jsx";
import CountryDetailPage from "./pages/CountryDetail/[slug]";
import FavouritePage from "./pages/FavouritePage/page.jsx";
import ContactPage from "./pages/ContactUs/page.jsx";

import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      {/* Global Toast Notifications */}
      <Toaster position="top-center" richColors />

      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<AuthPage />} />

          {/* Protected Routes */}
          <Route
            path="/HomePage"
            element={
              <ProtectedRoute>
                <DashboardTemplate>
                  <HomePage />
                </DashboardTemplate>
              </ProtectedRoute>
            }
          />
          <Route
            path="/country/:slug"
            element={
              <ProtectedRoute>
                <DashboardTemplate>
                  <CountryDetailPage />
                </DashboardTemplate>
              </ProtectedRoute>
            }
          />
          <Route
            path="/favourites"
            element={
              <ProtectedRoute>
                <DashboardTemplate>
                  <FavouritePage />
                </DashboardTemplate>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <DashboardTemplate>
                  <ContactPage />
                </DashboardTemplate>
              </ProtectedRoute>
            }
          />

          {/* Catch-all route - Redirect unknown paths back to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
