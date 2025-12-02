import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(2);
  });
});
