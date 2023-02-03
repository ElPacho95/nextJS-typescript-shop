import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "@/pages/api/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
