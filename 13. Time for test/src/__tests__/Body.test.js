import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import RESTAURANT_LIST_MOCK from "../utils/restaurantListMockData.json";
import Body from "../components/Body";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_LIST_MOCK);
    },
  });
});

describe("Body Component testcases", () => {
  test("Should render a list of restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const resCardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(resCardsBeforeSearch.length).toBe(20);
  });

  it("Should search restaurants with name burger", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {
      target: {
        value: "burger",
      },
    });

    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.click(searchButton);

    const resCardsAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardsAfterSearch.length).toBe(3);
  });
});
