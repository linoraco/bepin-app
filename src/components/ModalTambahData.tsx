// components/ModalTambahData.jsx
import React from "react";

const ModalTambahData = ({
  isOpen,
  onClose,
  onSave,
  newEntry,
  setNewEntry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-6 relative z-10 max-w-lg w-full">
        <h3 className="poppins-semibold">Tambah Data</h3>
        <input
          type="date"
          placeholder="Tanggal Masuk"
          value={newEntry.tanggalMasuk}
          onChange={(e) =>
            setNewEntry({ ...newEntry, tanggalMasuk: e.target.value })
          }
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <input
          type="number"
          placeholder="Jumlah Masuk"
          value={newEntry.jumlahMasuk}
          onChange={(e) =>
            setNewEntry({
              ...newEntry,
              jumlahMasuk: Number(e.target.value),
            })
          }
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <input
          type="text"
          placeholder="Kategori"
          value={newEntry.kategori}
          onChange={(e) =>
            setNewEntry({ ...newEntry, kategori: e.target.value })
          }
          className="input input-bordered w-full max-w-xs mb-4"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onSave}
            className="btn rounded-lg bg-blue-500 hover:bg-blue-600 ml-2"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn rounded-lg bg-red-500 hover:bg-red-600 ml-2"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahData;
