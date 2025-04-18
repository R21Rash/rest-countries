import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Tailwind base
import DashboardTemplate from "./components/molecules/Layout/DashboardTemplate"; // shared layout
import HomePage from "./pages/HomePage/page.jsx";

const App = () => {
  return (
    <Router>
      <DashboardTemplate>
        <Routes>
          <Route path="" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
         
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </DashboardTemplate>
    </Router>
  );
};

export default App;
