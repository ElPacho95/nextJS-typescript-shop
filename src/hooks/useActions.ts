import { favouriteActions } from "@/pages/api/store/favourite";
import { basketActions } from "@/pages/api/store/basket";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

const allActions = {
  ...favouriteActions,
  ...basketActions,
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
