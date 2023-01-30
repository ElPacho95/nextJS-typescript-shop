import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "@/pages/app/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
