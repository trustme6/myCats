import React from "react";

const Modal = ({ isModalOpen, menuItems }) => {
  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">{menuItems}</div>
        </div>
      )}
    </>
  );
};

export default Modal;