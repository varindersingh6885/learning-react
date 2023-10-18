import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { appStore } from "../redux-store/appStore";
import Header from "../components/Header";
import "@testing-library/jest-dom";

test("Should render Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

test("Should render Cart Item link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItemLink = screen.getByText(/Cart/);

  expect(cartItemLink).toBeInTheDocument();
});

test("Should change Login to Logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
