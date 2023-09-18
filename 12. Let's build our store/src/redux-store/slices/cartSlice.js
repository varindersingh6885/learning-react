import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["pizza", "burger"],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state itelf
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
