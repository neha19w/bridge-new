import { useDispatch, useSelector } from "react-redux";
import { setShowSplitView } from "../redux/actions/actions";
import "./SplitView.css";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const SplitView = () => {
  const dispatch = useDispatch();

  const showSplitView = useSelector(
    (state) => state.showSplitView.showSplitView
  );

  const handleClose = () => {
    dispatch(setShowSplitView(false));
  };

  return (
    <>
      <div>
        <Modal
          show={showSplitView}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          contentClassName="split-wrap"
        >
          <Modal.Body>
            <div className="split-body">
              <h4>Split View</h4>
              <Button variant="btn col-12 close-btn" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default SplitView;
