import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryCard from "../../Atoms/CountryCard/CountryCard";

const mockCountry = {
  flag: "https://flagcdn.com/w320/fr.png",
  name: { common: "France" },
  capital: ["Paris"],
  population: 67000000,
};

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("renders country card with name, capital, population, and flag", () => {
  renderWithRouter(<CountryCard country={mockCountry} />);

  expect(screen.getByText("France")).toBeInTheDocument();
  expect(screen.getByText(/Capital:/)).toHaveTextContent("Capital: Paris");
  expect(screen.getByText(/Population:/)).toHaveTextContent(
    "Population: 67,000,000"
  );
  expect(screen.getByAltText("France flag")).toBeInTheDocument();
});
