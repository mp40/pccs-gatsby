/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import React from "react";

import Component from "./";

import * as shotgunModel from "../../model/shotguns";

test("it renders correct number of results", () => {
  const { container } = render(<Component />);

  const hitsInput = screen.getByLabelText("Additional Hits");
  fireEvent.change(hitsInput, { target: { value: "11" } });

  const randomLocations = screen.getByText("Random Locations");
  fireEvent.click(randomLocations);

  const locations = container.getElementsByClassName("locations")[0];

  const results = within(locations).queryAllByText((value) => {
    if (value === "") {
      return false;
    }

    return typeof Number(value) === "number";
  });
  expect(results.length).toBe(11);
});

test("it adjusts HLS and upper limit for d1000 rolls", () => {
  const spy = jest.spyOn(shotgunModel, "getRandomHitLocation");

  const initLocation = 0;
  const hlsBySalm = 2;
  const upperLimit = 999;

  render(<Component />);

  const salmInput = screen.getByLabelText("SALM");
  fireEvent.change(salmInput, { target: { value: "-10" } });

  const randomLocations = screen.getByText("Random Locations");
  fireEvent.click(randomLocations);

  expect(spy).toHaveBeenCalledWith(initLocation, hlsBySalm * 10, upperLimit);
});
