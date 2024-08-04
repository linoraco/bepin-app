import React from "react";
import P13 from "@/assets/img/P13.png";
import P14 from "@/assets/img/P14.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-300  py-32 mb-3">
        <h1 className="text-3xl max-md:text-xl text-black text-center font-bold">
          JASA PELELANGAN
        </h1>
      </div>
      {/* Main Content Section */}
      <div className="bg-white md:mx-[10%] my-10 shadow-xl md:p-10">
        <div className="flex-col p-10">
          <p className="mb-4 text-justify  text-black animate-fade-in">
            <Image
              src={P13}
              alt="Sejarah Gereja"
              className=" h-auto w-[350px] float-left mr-4 mb-2 animate-slide-in-left"
            />
            Perusahaan Bepin Dwiputra memiliki layanan lelang yang terbuka untuk
            umum. Layanan lelang kami dirancang untuk memaksimalkan nilai aset
            melalui proses penawaran yang kompetitif. Kami mengatur dan
            mengelola lelang, memastikan bahwa lelang dilakukan secara
            profesional dan efisien.
          </p>
          <p className="mb-4 text-justify  text-black animate-fade-in">
            Dengan memanfaatkan jaringan kami yang luas, kami menarik banyak
            calon penawar, meningkatkan persaingan, dan meningkatkan nilai
            barang yang dilelang. Kami menjaga transparansi selama proses
            lelang, memastikan bahwa semua transaksi dilakukan secara adil dan
            etis.
          </p>

          <p className="animate-fade-in text-black">
            Layanan lelang kami dipercaya karena kredibilitas dan integritasnya,
            menjadikan kami mitra terpercaya bagi bisnis dan individu yang ingin
            mencapai hasil terbaik dari aset mereka.
            <Image
              src={P14}
              alt="Sejarah Gereja"
              className="h-auto float-right w-[250px] mr-4 mb-2 animate-slide-in-right"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
