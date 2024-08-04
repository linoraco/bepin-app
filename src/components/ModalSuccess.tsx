// components/ModalSuccess.jsx
import React from "react";

const ModalSuccess = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-6 relative z-10 max-w-lg w-full">
        <h3 className="poppins-semibold text-center">Success</h3>
        <p className="text-center mb-4">Data berhasil dimasukkan</p>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="btn rounded-lg bg-green-500 hover:bg-green-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
