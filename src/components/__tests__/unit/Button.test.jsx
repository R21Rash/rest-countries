import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "../../Atoms/Button/Button";

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("renders button with label", () => {
  renderWithRouter(<Button label="Submit" />);
  expect(screen.getByText("Submit")).toBeInTheDocument();
});

test("applies the correct class based on variant", () => {
  const { container } = renderWithRouter(
    <Button label="Outlined" variant="outlinePrimary" />
  );
  expect(container.firstChild).toHaveClass("border-blue-600");
});

test("renders icon if provided", () => {
  const DummyIcon = () => <svg data-testid="icon" />;
  renderWithRouter(<Button label="With Icon" icon={<DummyIcon />} />);
  expect(screen.getByTestId("icon")).toBeInTheDocument();
});

test("calls onClick handler when clicked", () => {
  const handleClick = jest.fn();
  renderWithRouter(<Button label="Click Me" onClick={handleClick} />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
