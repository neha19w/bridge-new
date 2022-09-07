import { ActionTypes } from "../constants/action_types";

const initialState = {
    showSplitView:false,
};
export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_SPLIT_VIEW:
      return { ...state, showSplitView: payload };
    default:
      return state;
  }
};
