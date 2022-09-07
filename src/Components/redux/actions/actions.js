import { ActionTypes } from "../constants/action_types";

export const setShowSplitView = (showSplitView) => {
  return {
    type: ActionTypes.SHOW_SPLIT_VIEW,
    payload: showSplitView,
  };
};
