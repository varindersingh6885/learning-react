import { useSelector, useDispatch } from "react-redux";

import { clearCart } from "../redux-store/slices/cartSlice";

import RestaurantCategoryItem from "./RestaurantCategoryItem";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto my-4">
      <h2 className="text-center text-4xl font-bold p-4 border-b-2">Cart</h2>
      {cartItems?.length ? (
        <div className="flex justify-end p-4">
          <button
            className="border-2 font-semibold px-4 py-2 rounded-lg hover:text-white hover:bg-red-600 border-red-600 text-red-600"
            onClick={clearCartItems}
          >
            Clear cart
          </button>
        </div>
      ) : (
        <div className="mt-6 text-center">
          <h2>Cart is empty. Please add new items.</h2>
        </div>
      )}
      {cartItems.map((item, index) => {
        return (
          <RestaurantCategoryItem key={item?.id + index} itemData={item} />
        );
      })}
    </div>
  );
};

export default Cart;
