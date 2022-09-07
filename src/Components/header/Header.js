import React from "react";
import { useDispatch } from "react-redux";
import { setShowSplitView } from "../redux/actions/actions";
import SplitView from "../splitView/SplitView";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const openSplitView = () => {
    dispatch(setShowSplitView(true));
  };
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="d-flex justify-content-end px-2 py-3 ">
            <div className="px-2">icon</div>
            <div className="px-2">icon</div>
            <div className="px-2">icon</div>
            <div className="px-2">
              <button className="split-button" onClick={openSplitView}>
                split view
              </button>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <ul>
            <li className="tab tabSelected">
              <a href="#">Tab 1</a>
              <a className="closeTab" href="">
                ✕
              </a>
            </li>
            {/* <li className="tab selected">
              <a href="#">Tab 2</a>
              <a className="closeTab" href="">
                ✕
              </a>
            </li> */}
            <label className="tabAddPlus">+</label>
          </ul>
        </div>
      </div>
      <SplitView/>
    </>
  
  );
};

export default Header;
