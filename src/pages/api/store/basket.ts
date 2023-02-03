import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/pages/api/store/product.types";

const initialState: IProduct[] = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
    removeToBasket: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((i) => i.id !== action.payload.id);
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const basketActions = basketSlice.actions;
