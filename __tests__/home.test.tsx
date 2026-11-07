// Smoke test for Seam A (render the home page).
// Seam A assertions are added with the page shell and each Section.
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("home page renders its main content", () => {
  render(<Home />);
  expect(screen.getByRole("main")).toBeTruthy();
});
