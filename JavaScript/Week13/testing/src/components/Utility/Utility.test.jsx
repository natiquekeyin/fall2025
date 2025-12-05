import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

describe("Utility", () => {
  test("clear", async () => {
    const user = userEvent.setup();
    render(<textarea defaultValue="Hello, World!" />);
    await user.clear(screen.getByRole("textbox"));
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  test("selectOptions", async () => {
    const user = userEvent.setup();
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    await user.selectOptions(screen.getByRole("listbox"), ["1", "B", "3"]);
    expect(screen.getByRole("option", { name: "A" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "B" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "C" }).selected).toBe(true);
  });

  test.only("deselectOptions", async () => {
    render(
      //   <select mulitple>
      //     <option value="1">A</option>
      //     <option value="2">B</option>
      //     <option value="3">C</option>
      //   </select>

      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    const user = userEvent.setup();
    await user.deselectOptions(screen.getByRole("listbox"), "2");
    expect(screen.getByText("B").selected).toBe(false);
  });
});
