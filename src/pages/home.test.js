/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import { Home } from "./";

describe("Home Page", () => {
  it("renders", () => {
    render(<Home />);
    expect(screen.getByText("PCCS Tools")).toBeInTheDocument();
  });
});
