import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS", "JAVA"];
  render(<Skills skills={skills} />);
  test("renders correctly", async () => {
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(4);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start Learning button appears", async () => {
    const startLearningButton1 = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 3000,
      }
    );
    expect(startLearningButton1).toBeInTheDocument();
  });
});
