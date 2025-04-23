import React from "react";
import { render, screen } from "@testing-library/react";
import Toast from "../../Atoms/Toast/Toast";

jest.useFakeTimers();

describe("Toast component", () => {
  test("renders the toast message", () => {
    render(<Toast message="Operation successful!" onClose={jest.fn()} />);
    expect(screen.getByText("Operation successful!")).toBeInTheDocument();
  });

  test("applies correct styles for success", () => {
    const { container } = render(
      <Toast type="success" message="Success!" onClose={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass("bg-green-500");
  });

  test("applies correct styles for warning", () => {
    const { container } = render(
      <Toast type="warning" message="Warning!" onClose={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass("bg-yellow-500");
  });

  test("applies correct styles for error", () => {
    const { container } = render(
      <Toast type="error" message="Error!" onClose={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass("bg-red-500");
  });

  test("calls onClose after 3 seconds", () => {
    const onCloseMock = jest.fn();
    render(<Toast message="Auto close" onClose={onCloseMock} />);
    jest.advanceTimersByTime(3000);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
