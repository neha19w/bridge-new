import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div className="d-flex justify-content-end pt-2">
            <div className="px-2">
                <label>You are online. &nbsp; </label>
                <label>Your file is being auto-synced</label>
            </div>
            <div className="px-2">icon</div>
            <div className="px-2">icon</div>
            <div className="px-2">icon</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
