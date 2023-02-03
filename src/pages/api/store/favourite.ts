import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/pages/api/store/product.types";

const initialState: IProduct[] = [];

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((i) => i.id !== action.payload.id);
    },
  },
});

export const favouriteReducer = favouriteSlice.reducer;
export const favouriteActions = favouriteSlice.actions;
