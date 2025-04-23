import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchAndFilter from "../../molecules/SearchAndFilter/SearchAndFiler";

// Mock props
const mockRegions = ["Asia", "Europe"];
const mockLanguages = ["English", "French"];

describe("SearchAndFilter Integration Test", () => {
  test("renders all search and filter elements", () => {
    render(
      <SearchAndFilter
        searchTerm=""
        onSearchChange={() => {}}
        selectedRegion=""
        onRegionChange={() => {}}
        regions={mockRegions}
        selectedLanguage=""
        onLanguageChange={() => {}}
        languages={mockLanguages}
      />
    );

    // Search input
    expect(
      screen.getByPlaceholderText("Search for a country...")
    ).toBeInTheDocument();

    // Region filter
    expect(screen.getByLabelText("Filter by Region")).toBeInTheDocument();
    expect(screen.getByText("Asia")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();

    // Language filter
    expect(screen.getByLabelText("Filter by Language")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("French")).toBeInTheDocument();
  });

  test("calls change handlers when interacting with filters", () => {
    const handleSearchChange = jest.fn();
    const handleRegionChange = jest.fn();
    const handleLanguageChange = jest.fn();

    render(
      <SearchAndFilter
        searchTerm=""
        onSearchChange={handleSearchChange}
        selectedRegion=""
        onRegionChange={handleRegionChange}
        regions={mockRegions}
        selectedLanguage=""
        onLanguageChange={handleLanguageChange}
        languages={mockLanguages}
      />
    );

    // Simulate search input
    fireEvent.change(screen.getByPlaceholderText("Search for a country..."), {
      target: { value: "Germany" },
    });
    expect(handleSearchChange).toHaveBeenCalledTimes(1);

    // Simulate dropdown changes
    fireEvent.change(screen.getByLabelText("Filter by Region"), {
      target: { value: "Asia" },
    });
    expect(handleRegionChange).toHaveBeenCalledTimes(1);

    fireEvent.change(screen.getByLabelText("Filter by Language"), {
      target: { value: "English" },
    });
    expect(handleLanguageChange).toHaveBeenCalledTimes(1);
  });
});
