import React from "react";

const IbadahMingguModal = ({
  visible,
  onClose,
  onSubmit,
  selectedIbadah,
  amount,
  setAmount,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="poppins-semibold text-lg mb-4">
          Input Jumlah Persembahan - {selectedIbadah}
        </h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button className="btn bg-gray-300 rounded-lg mr-2" onClick={onClose}>
            Batal
          </button>
          <button className="btn bg-blue-500 rounded-lg" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default IbadahMingguModal;
