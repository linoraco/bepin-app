// components/ModalConfirmDelete.jsx
import React from "react";

const ModalConfirmDelete = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-6 relative z-10 max-w-lg w-full">
        <h3 className="poppins-semibold text-center">Konfirmasi Hapus</h3>
        <p className="text-center mb-4">
          Anda yakin ingin menghapus data terakhir?
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onConfirm}
            className="btn rounded-lg bg-red-500 hover:bg-red-600 mx-2"
          >
            Hapus
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn rounded-lg bg-gray-500 hover:bg-gray-600 mx-2"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;
