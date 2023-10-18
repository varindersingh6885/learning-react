import { render, screen, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import RestaurantMenu from "../components/RestaurantMenu";
import RESTAURANT_MENU_MOCK_DATA from "../utils/restaurantMenuMockData.json";
import "@testing-library/jest-dom";

import { appStore } from "../redux-store/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU_MOCK_DATA);
    },
  });
});

describe("RestaurantMenu component testcases", () => {
  test("Should render Restaurant name and restaurant rating", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    expect(
      screen.getByRole("heading", { name: "McDonald's", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /rating: 4.2/i, level: 3 })
    ).toBeInTheDocument();
  });

  test("Should render Restaurant category accordians", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    expect(screen.getAllByTestId("restaurant-category-accordian").length).toBe(
      12
    );
  });

  test("Should open Restaurant category accordian and render category items", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const categoryAccordians = screen.getAllByTestId(
      "restaurant-category-accordian"
    );

    fireEvent.click(categoryAccordians[0]);

    expect(
      screen.getByText("2 McSpicy Chicken Burger + Fries (L) + 2 Coke")
    ).toBeInTheDocument();
    expect(
      screen.getByText("2 McVeggie Burger + Fries (L) + 2 Coke")
    ).toBeInTheDocument();
    expect(
      screen.getByText("2 McChicken Burger + Fries (L) + 2 Coke")
    ).toBeInTheDocument();
  });

  test("Should add items to cart, should clear cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    // expect empty cart
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Cart is empty. Please add new items.",
      })
    ).toBeInTheDocument();

    // check cart item 0
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();

    const categoryAccordians = screen.getAllByTestId(
      "restaurant-category-accordian"
    );

    fireEvent.click(categoryAccordians[0]);

    const addToCartButtons = screen.getAllByRole("button", { name: "ADD" });
    expect(addToCartButtons.length).toBe(11);

    fireEvent.click(addToCartButtons[0]);

    // expect 1 item added in cart
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(addToCartButtons[0]);

    //expect 2 items in cart
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    const clearCartButton = screen.getByRole("button", { name: "Clear cart" });
    expect(clearCartButton).toBeInTheDocument();

    //clear cart
    fireEvent.click(clearCartButton);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Cart is empty. Please add new items.",
      })
    ).toBeInTheDocument();
  });
});
