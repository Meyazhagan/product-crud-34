import React from "react";

function ToastMessage({ closeToast, onUndo, messaage }) {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <div>{messaage}</div>
      <button
        className="btn text-success"
        onClick={() => {
          onUndo();
        }}
      >
        Undo
      </button>
    </div>
  );
}

export default ToastMessage;
