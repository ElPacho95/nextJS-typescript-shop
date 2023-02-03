import { productApi } from "@/pages/api/store/product";
import { configureStore } from "@reduxjs/toolkit";
import { favouriteReducer } from "@/pages/api/store/favourite";
import { basketReducer } from "@/pages/api/store/basket";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    favourite: favouriteReducer,
    basket: basketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
