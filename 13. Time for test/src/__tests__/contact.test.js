import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should render Contact Us page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should render Email input field", () => {
  render(<Contact />);

  const emailInput = screen.getByPlaceholderText("Email Id");

  expect(emailInput).toBeInTheDocument();
});

test("Should render Submit button", () => {
  render(<Contact />);

  const submitButton = screen.getByRole("button", {
    name: "Submit",
  });

  expect(submitButton).toBeInTheDocument();
});

test("Should render 2 text inputs", () => {
  render(<Contact />);

  const textInputs = screen.getAllByRole("textbox");

  expect(textInputs.length).toBe(2);
});
