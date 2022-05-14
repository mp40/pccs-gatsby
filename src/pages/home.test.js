/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Component from "./";

describe("Home Page", () => {
  it("renders", () => {
    render(<Component />);
    expect(screen.getByText("PCCS Tools")).toBeInTheDocument();
  });
});
