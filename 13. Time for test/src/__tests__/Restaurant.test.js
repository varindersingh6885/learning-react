import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";

import { MOCK_RESTAURANT_DATA } from "../utils/mockData";

describe("Restaurant Card testcases", () => {
  test("Should render restaurant name", () => {
    render(<RestaurantCard resData={MOCK_RESTAURANT_DATA} />);
    const restaurantName = screen.getByText("Barbeque Nation");
    expect(restaurantName).toBeInTheDocument();
  });

  test("Should render promoted restaurant card", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_RESTAURANT_DATA} />);

    const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();
  });
});
