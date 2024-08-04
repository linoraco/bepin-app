import React from "react";
import Image from "next/image";
import P12 from "@/assets/img/P12.png";

export default function page() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-300  py-32 mb-3">
        <h1 className="text-3xl max-md:text-xl text-black text-center font-bold">
          MAKELAR
        </h1>
      </div>
      {/* Main Content Section */}
      <div className="bg-white md:mx-[10%] my-10 shadow-xl md:p-10">
        <div className="flex-col p-10">
          <p className="mb-4 text-justify  text-black animate-fade-in">
            <Image
              src={P12}
              alt="Sejarah Gereja"
              className=" h-auto w-[350px] float-left mr-4 mb-2 animate-slide-in-left"
            />
            Perusahaan kami juga berperan sebagai makelar. Makelar memiliki
            tugas sebagai perantara antara dua pihak dalam transaksi bisnis.
            Perbedaannya dengan agen komisi, makelar tidak memiliki hubungan
            eksklusif dengan salah satu pihak. Makelar memiliki beberapa fungsi
            yaitu sebagai berikut.
          </p>
          <div
            className=" text-black poppins-regular mb-10
       "
          >
            <ol className="list-disc  mt-5 text-justify">
              <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 text-justify font-semibold">
                Perantara Transaksi
              </h1>
              <li className="mt-2">
                <p>
                  {" "}
                  Perantara Transaksi Sebagai makelar, kami bertindak sebagai
                  perantara, menghubungkan pembeli dengan penjual dan
                  menegosiasikan persyaratan yang menguntungkan kedua belah
                  pihak.
                </p>
              </li>
              <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 text-justify font-semibold">
                Ahli Pasar
              </h1>
              <li className="mt-2">
                <p>
                  {" "}
                  Kami memberi klien akses ke jaringan pembeli dan penjual
                  potensial yang luas, membantu mereka menemukan peluang terbaik
                  di pasar.
                </p>
              </li>
              <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 text-justify font-semibold">
                Negosiator Handal
              </h1>
              <li className="mt-2">
                <p>
                  {" "}
                  Makelar terampil kami menghadirkan keahlian mereka, memastikan
                  bahwa transaksi diselesaikan secara efisien dan memuaskan
                  semua pihak yang terlibat.
                </p>
              </li>
            </ol>
          </div>

          <p className="animate-fade-in text-black">
            Profesionalisme dan keahlian pasar menentukan layanan makelar kami.
            Komitmen kami untuk menghubungkan pembeli dan penjual, ditambah
            dengan analisis pasar terperinci dan keterampilan negosiasi ahli,
            memastikan bahwa setiap transaksi berjalan lancar dan saling
            menguntungkan.
          </p>
        </div>
      </div>
    </div>
  );
}
