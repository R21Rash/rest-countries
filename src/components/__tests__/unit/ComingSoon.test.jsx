import React from "react";
import { render, screen } from "@testing-library/react";
import ComingSoon from "../../Atoms/ComingSoon/ComingSoon";

describe("ComingSoon component", () => {
  test("renders default title and message", () => {
    render(<ComingSoon />);

    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    expect(
      screen.getByText("This feature is under construction. Stay tuned!")
    ).toBeInTheDocument();
  });

  test("renders custom title and message", () => {
    const customTitle = "New Feature Alert";
    const customMessage = "We're working hard to bring this to you soon!";

    render(<ComingSoon title={customTitle} message={customMessage} />);

    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  test("renders the hammer icon", () => {
    render(<ComingSoon />);
    const iconWrapper = screen.getByTestId("hammer-icon-wrapper");
    expect(iconWrapper).toBeInTheDocument();
  });
});
