import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../Atoms/SearchBar/SearchBar";

describe("SearchBar component", () => {
  test("renders input with placeholder", () => {
    render(<SearchBar value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText("Search for a country...");
    expect(inputElement).toBeInTheDocument();
  });

  test("displays passed value", () => {
    render(<SearchBar value="France" onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue("France");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(inputElement, { target: { value: "Germany" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
