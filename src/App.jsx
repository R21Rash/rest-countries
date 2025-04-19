import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import DashboardTemplate from "./components/molecules/Layout/DashboardTemplate";
import HomePage from "./pages/HomePage/page.jsx";
import AuthPage from "./pages/AuthPage/page.jsx";
import CountryDetailPage from "./pages/CountryDetail/[slug]";

const App = () => {
  return (
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
      </Routes>
    </Router>
  );
};

export default App;
