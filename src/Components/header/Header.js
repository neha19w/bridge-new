import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="d-flex justify-content-end px-2 py-3 ">
            <div className="px-2">icon</div>
            <div className="px-2">icon</div>
            <div className="px-2">icon</div>
            <div className="px-2">
              <button className="split-button">split view</button>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <ul>
            <li class="tab tabSelected">
              <a href="#">Tab 1</a>
              <a class="closeTab" href="">
                ✕
              </a>
            </li>
            {/* <li class="tab selected">
              <a href="#">Tab 2</a>
              <a class="closeTab" href="">
                ✕
              </a>
            </li> */}
            <label className="tabAddPlus">+</label>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
