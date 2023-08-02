import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should test Contact component", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should test Contact text", () => {
    render(<ContactUs />);
    const heading = screen.getByText("Submit");
    expect(heading).toBeInTheDocument();
  });
  