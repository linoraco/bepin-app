export const dataPerminggu = [
  {
    id: 1,
    tanggal_masuk: "20 maret 2024",
    jumlah: "1.000.000",
    kategori: "ibadah kaum bapa",
  },
  {
    id: 2,
    tanggal_masuk: "28 april 2024",
    jumlah: "2.000.000",
    kategori: "ibadah kaum ibu",
  },
  {
    id: 3,
    tanggal_masuk: "20 mei 2024",
    jumlah: "3.000.000",
    kategori: "ibadah pemuda",
  },
  {
    id: 4,
    tanggal_masuk: "20 mei 2024",
    jumlah: "3.000.000",
    kategori: "ibadah remaja",
  },
  {
    id: 5,
    tanggal_masuk: "20 mei 2024",
    jumlah: "3.000.000",
    kategori: "ibadah ASM",
  },
  {
    id: 6,
    tanggal_masuk: "28 mei 2024",
    jumlah: "3.000.000",
    kategori: "ibadah ASM",
  },
];

export const convertToInteger = (data) => {
  return data.map((item) => {
    const jumlahInt = parseInt(item.jumlah.replace(/\./g, ""), 10);
    return { ...item, jumlah: jumlahInt };
  });
};

export const dataPermingguInteger = convertToInteger(dataPerminggu);
