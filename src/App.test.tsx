import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  console.log("COUCOU sale merde");
  console.log(import.meta.env.VITE_TITLE);
  const LINK_ELEMENT: HTMLElement = screen.getByText(
    "E-constellatio" + import.meta.env.VITE_TITLE
  );
  expect(LINK_ELEMENT).toBeInTheDocument();
});
