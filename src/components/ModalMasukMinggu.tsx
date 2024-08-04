import React, { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "@/app/firebase"; // Pastikan path ini sesuai dengan konfigurasi Firebase Anda

export default function ModalMasukMinggu() {
  const [mingguList, setMingguList] = useState([]);

  // Fungsi untuk menambahkan minggu baru
  const addMinggu = async () => {
    const newMinggu = {
      id: mingguList.length + 1,
      data: [
        {
          id: mingguList.length + 1, // Contoh ID untuk data pertama
          tanggalMasuk: new Date(), // Contoh tanggal masuk
          kategori: "Kategori 1", // Contoh kategori
          jumlahPersembahan: 0, // Contoh jumlah persembahan
        },
      ],
      isOpen: false,
    };

    try {
      // Tambahkan minggu baru ke dalam database Firebase
      await addDoc(collection(db, "mingguList"), newMinggu);

      // Tambahkan minggu baru ke dalam state
      setMingguList([...mingguList, newMinggu]);
    } catch (error) {
      console.error("Error adding new minggu: ", error);
    }
  };

  // Mengambil data minggu dari Firebase saat komponen pertama kali dimuat
  useEffect(() => {
    const queryMingguList = query(collection(db, "mingguList"));
    const unsubscribe = onSnapshot(queryMingguList, (querySnapshot) => {
      const mingguListArr = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMingguList(mingguListArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <button className="btn" onClick={addMinggu}>
        Tambah Minggu
      </button>
      {mingguList.map((minggu) => (
        <div key={minggu.id}>
          <h1>Minggu {minggu.id}</h1>
          {/* Render data minggu lainnya di sini */}
          <ul>
            {minggu.data.map((data, index) => (
              <li key={index}>
                ID: {data.id}, Tanggal Masuk:{" "}
                {data.tanggalMasuk.toLocaleDateString("id-ID")}, Kategori:{" "}
                {data.kategori}, Jumlah Persembahan: {data.jumlahPersembahan}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
