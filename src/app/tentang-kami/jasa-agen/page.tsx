import React from "react";
import P10 from "@/assets/img/P10.png";
import P11 from "@/assets/img/P11.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-300  py-32 mb-3">
        <h1 className="text-3xl max-md:text-xl text-black text-center font-bold">
          JASA AGEN
        </h1>
      </div>
      {/* Main Content Section */}
      <div className="bg-white md:mx-[10%] my-10 shadow-xl md:p-10">
        <div className="flex-col p-10">
          <p className="mb-4 text-justify  text-black animate-fade-in">
            <Image
              src={P10}
              alt="Sejarah Gereja"
              className=" h-auto w-[350px] float-left mr-4 mb-2 animate-slide-in-left"
            />
            Perusahaan Bepin Dwiputra melakukan perdagangan berbagai macam
            barang dalam skala yang besar. Salah satu peran kami adalah menjadi
            agen komisi. Agen komisi berarti kami menjadi penghubung perusahaan
            dengan mewakili penjualan produk atau jasa tersebut. Dengan menjadi
            penghubung, perusahaan ini memfasilitasi setiap transaksi agar
            berjalan dengan lancar dan efisien. Beberapa fungsi kami sebagai
            agen komisi adalah sebagai berikut.
          </p>
          <div
            className=" text-black poppins-regular mb-10
           "
          >
            <ol className="list-disc  mt-5 text-justify">
              <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 text-justify font-semibold">
                Representasi Transaksi
              </h1>
              <li className="mt-2">
                <p>
                  {" "}
                  Bertindak atas nama klien, kami bernegosiasi untuk mencapai
                  kesepakatan yang memastikan semua kepentingan terpenuhi.
                </p>
              </li>
              <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 text-justify font-semibold">
                Konsultan Pasar
              </h1>
              <li className="mt-2">
                <p>
                  {" "}
                  Dengan pengetahuan pasar dan keahlian perusahaan kami, klien
                  akan diberikan wawasan dan saran untuk membantu klien membuat
                  keputusan yang tepat.
                </p>
              </li>
              <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 text-justify font-semibold">
                Pembangun Hubungan
              </h1>
              <li className="mt-2">
                <p>
                  {" "}
                  Dalam setiap kegiatan, kami berfokus untuk membangun hubungan
                  baik berjangka panjang dengan klien kami.
                </p>
              </li>
            </ol>
          </div>

          <p className="animate-fade-in text-black">
            Kegiatan pengadaan barang juga dilakukan perusahaan ini. Pengadaan
            dilakukan untuk instansi seperti BUMN sesuai dengan kebutuhan dari
            BUMN tersebut. Proses ini mulai dari perencanaan kebutuhan sampai
            penyerahan hasil kerja.
            <Image
              src={P11}
              alt="Sejarah Gereja"
              className="h-auto float-right w-[250px] mr-4 mb-2 animate-slide-in-right"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
