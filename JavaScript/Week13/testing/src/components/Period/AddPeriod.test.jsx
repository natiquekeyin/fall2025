import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AddPeriod from "./AddPeriod";

describe("Add Period", () => {
  render(<AddPeriod />);
  test("Add period renders correctly", () => {
    const txtElement = screen.getByText("Hello");
    expect(txtElement).toBeInTheDocument();
  });

  test("Add Period with name and period", () => {
    render(<AddPeriod name="Keyin College" />);
    const textElement = screen.getByText("Hello Keyin College.");
    expect(textElement).toBeInTheDocument();
  });
});
