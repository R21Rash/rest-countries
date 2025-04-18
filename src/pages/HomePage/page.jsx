import React from "react";
import Header from "../../components/molecules/Header/Header";
import Footer from "../../components/molecules/Footer/Footer";
import DashboardTemplate from "../../components/molecules/Layout/DashboardTemplate";
import SearchAndFilter from "../../components/molecules/SearchAndFilter/SearchAndFiler";
import TitleCard from "../../components/molecules/TitleCard/TitleCard";
import CommonCard from "../../components/Atoms/CommonCard/CommonCard";

const HomePage = () => {
  return (
    <>
      <TitleCard title="Welcome to the Dashboard" />

      <SearchAndFilter />
    </>
  );
};

export default HomePage;
