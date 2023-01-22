import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  process.env.VITE_TITLE = "React Template development";
  render(<App />);
  const LINK_ELEMENT: HTMLElement = screen.getByText(
    "E-constellatio React Template development"
  );
  expect(LINK_ELEMENT).toBeInTheDocument();
});
