import { useState, useEffect } from "react";

export default function InputModal({ isOpen, onClose, onSave }) {
  const [namaKolom, setNamaKolom] = useState("");
  const [minggu1, setMinggu1] = useState("");
  const [minggu2, setMinggu2] = useState("");
  const [minggu3, setMinggu3] = useState("");
  const [minggu4, setMinggu4] = useState("");
  const [totalPersembahan, setTotalPersembahan] = useState("");

  useEffect(() => {
    const total =
      (parseFloat(minggu1.replace(/,/g, "")) || 0) +
      (parseFloat(minggu2.replace(/,/g, "")) || 0) +
      (parseFloat(minggu3.replace(/,/g, "")) || 0) +
      (parseFloat(minggu4.replace(/,/g, "")) || 0);
    setTotalPersembahan(new Intl.NumberFormat("id-ID").format(total));
  }, [minggu1, minggu2, minggu3, minggu4]);

  const handleSave = () => {
    const newData = {
      namaKolom,
      minggu1: parseFloat(minggu1.replace(/,/g, "")),
      minggu2: parseFloat(minggu2.replace(/,/g, "")),
      minggu3: parseFloat(minggu3.replace(/,/g, "")),
      minggu4: parseFloat(minggu4.replace(/,/g, "")),
      totalPersembahan: parseFloat(totalPersembahan.replace(/[^0-9,-]+/g, "")),
    };
    onSave(newData);
    onClose();
  };

  const handleInputChange = (setFunction) => (event) => {
    const { value } = event.target;
    const formattedValue = new Intl.NumberFormat("id-ID").format(
      value.replace(/[^0-9]/g, "")
    );
    setFunction(formattedValue);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-5 rounded">
        <h2 className="text-xl mb-4">Input Data</h2>
        <div className="mb-2">
          <label>Nama Kolom</label>
          <input
            type="text"
            className="border p-1 w-full"
            value={namaKolom}
            onChange={(e) => setNamaKolom(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label>Minggu 1</label>
          <input
            type="text"
            className="border p-1 w-full"
            value={minggu1}
            onChange={handleInputChange(setMinggu1)}
          />
        </div>
        <div className="mb-2">
          <label>Minggu 2</label>
          <input
            type="text"
            className="border p-1 w-full"
            value={minggu2}
            onChange={handleInputChange(setMinggu2)}
          />
        </div>
        <div className="mb-2">
          <label>Minggu 3</label>
          <input
            type="text"
            className="border p-1 w-full"
            value={minggu3}
            onChange={handleInputChange(setMinggu3)}
          />
        </div>
        <div className="mb-2">
          <label>Minggu 4</label>
          <input
            type="text"
            className="border p-1 w-full"
            value={minggu4}
            onChange={handleInputChange(setMinggu4)}
          />
        </div>
        <div className="mb-4">
          <label>Total Persembahan</label>
          <input
            type="text"
            className="border p-1 w-full"
            value={totalPersembahan}
            readOnly
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
