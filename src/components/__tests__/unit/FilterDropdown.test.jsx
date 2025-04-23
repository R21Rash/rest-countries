import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterDropdown from "../../Atoms/FilterDropdown/FilterDropdown";

describe("FilterDropdown", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const label = "Select Option";

  test("renders label and all options", () => {
    render(
      <FilterDropdown
        label={label}
        options={mockOptions}
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByText(label)).toBeInTheDocument();
    mockOptions.forEach((opt) => {
      expect(screen.getByText(opt)).toBeInTheDocument();
    });
  });

  test("calls onChange when selection changes", () => {
    const handleChange = jest.fn();
    render(
      <FilterDropdown
        label={label}
        options={mockOptions}
        value={mockOptions[0]}
        onChange={handleChange}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: mockOptions[1] },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("select displays the correct selected value", () => {
    render(
      <FilterDropdown
        label={label}
        options={mockOptions}
        value="Option 2"
        onChange={() => {}}
      />
    );

    expect(screen.getByDisplayValue("Option 2")).toBeInTheDocument();
  });
});
