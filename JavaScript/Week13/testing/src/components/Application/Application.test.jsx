import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const heading = screen.getByText("Registration Form");
    expect(heading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", { level: 3 });
    expect(pageHeading).toBeInTheDocument();

    const pageHeading2 = screen.getByRole("heading", {
      level: 4,
    });
    expect(pageHeading2).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();
  });
});
