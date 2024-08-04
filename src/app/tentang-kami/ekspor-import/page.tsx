import React from "react";
import P15 from "@/assets/img/P15.png";
import P16 from "@/assets/img/P16.png";
import P17 from "@/assets/img/P17.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-300  py-32 mb-3">
        <h1 className="text-3xl max-md:text-xl text-black text-center font-bold">
          EKSPOR - IMPORT
        </h1>
      </div>
      {/* Main Content Section */}
      <div className="bg-white md:mx-[10%] my-10 shadow-xl md:p-10">
        <div className="flex-col p-10">
          <p className="mb-4 text-justify  text-black animate-fade-in">
            <Image
              src={P15}
              alt="Sejarah Gereja"
              className=" h-auto w-[350px] float-left mr-4 mb-2 animate-slide-in-left"
            />
            Layanan perdagangan barang ekspor-impor kami di perusahaan Bepin
            Dwiputra dirancang untuk menghubungkan pasar global dan
            memfasilitasi pertukaran barang internasional. Mulai dari pengadaan
            produk hingga pengelolaan logistik, kami menyediakan solusi
            menyeluruh untuk bisnis yang ingin mengimpor atau mengekspor barang.
            Pemahaman mendalam kami tentang pasar internasional dan peraturan
            perdagangan memastikan bahwa klien kami dapat menavigasi
            kompleksitas perdagangan global dengan mudah. Kami memprioritaskan
            kualitas dan kepatuhan, memastikan bahwa semua produk memenuhi
            standar dan peraturan yang disyaratkan di pasar tujuan.
          </p>

          <p className="animate-fade-in text-black">
            Dengan komitmen terhadap integritas, kredibilitas, dan
            profesionalisme, layanan perdagangan grosir ekspor-impor kami
            dirancang untuk membantu bisnis memperluas jangkauan mereka dan
            mencapai kesuksesan di pasar global.
            <Image
              src={P17}
              alt="Sejarah Gereja"
              className="h-auto float-right w-[250px] mr-4 mb-2 animate-slide-in-right"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
