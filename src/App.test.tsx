import {
  beforeEach,
  describe,
  expect,
  test,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("should show test after clicking the button", async () => {
    const button = await screen.findByRole("button");
    fireEvent.click(button);
    const header = await screen.findByText(/test/i);
    expect(header).toBeDefined();
  });
});
