import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SplitView from "../splitView/SplitView";
import ViewScreenMain from "../viewScreenMain/viewScreenMain";

import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          {/* <SplitView/> */}
          <ViewScreenMain />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
