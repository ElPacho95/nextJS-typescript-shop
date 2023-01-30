import { favouriteActions  } from "@/pages/app/store/favourite";
import { basketActions  } from "@/pages/app/store/basket";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

const allActions = {
  ...favouriteActions,
  ...basketActions
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
