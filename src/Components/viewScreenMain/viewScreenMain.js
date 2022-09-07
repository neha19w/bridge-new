import "./viewScreenMain.css";
import React from "react";

const ViewScreenMain = () => {
  return (
    <>
      <div className="viewMain row">
        <div className="viewLeft col-10">
          <div className="feed-table-parent">
            <div className="feed-table-child">
              <div className="feed-table">
                <table className="table-responsive" id="active-feed-table">
                  <tbody className="feed-content">
                    <tr id="feed-row">
                      <td className="lineNo px-2" id="lineNumber">
                        1/3
                      </td>
                      <td className="timecode" id="timeCode">
                        09:57:33
                      </td>
                      {/* <td className="line-annotation">
                        <button id="markLine" className="hide-mark"></button>
                      </td> */}
                      <td className="text" id="feedText">
                        the brief demonstration will allow you to
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="viewRight col-2">
          <div className="d-flex justify-content-end">
            <label>icon</label>
          </div>
        </div>
      </div>
    
    </>
  );
};
export default ViewScreenMain;
