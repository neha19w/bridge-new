import { combineReducers } from "redux";
import { reducers } from "./reducers";

const projReducers = combineReducers({
  showSplitView: reducers,
});
export default projReducers;
