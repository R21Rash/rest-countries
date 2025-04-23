import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TitleCard from "../../molecules/TitleCard/TitleCard";

const renderWithRoute = (ui, route = "/dashboard/settings") => {
  window.history.pushState({}, "Test page", route);
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe("TitleCard component", () => {
  test("renders title and description", () => {
    renderWithRoute(
      <TitleCard title="Settings" description="Manage your preferences" />
    );

    expect(
      screen.getByRole("heading", { name: "Settings" })
    ).toBeInTheDocument();
    expect(screen.getByText("Manage your preferences")).toBeInTheDocument();
  });

  test("renders breadcrumb based on route", () => {
    renderWithRoute(<TitleCard title="Settings" />);

    const nav = screen.getByRole("navigation");
    expect(within(nav).getByText("Home")).toBeInTheDocument();
    expect(within(nav).getByText("Dashboard")).toBeInTheDocument();
    expect(within(nav).getByText("Settings")).toBeInTheDocument();
  });

  test("renders children content", () => {
    renderWithRoute(
      <TitleCard title="Dashboard">
        <p>test</p>
      </TitleCard>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
