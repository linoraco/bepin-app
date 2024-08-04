import React from "react";
import Image from "next/image";
import K1 from "@/assets/img/K1.png";
import K2 from "@/assets/img/K2.png";
import K3 from "@/assets/img/K3.png";

export default function Page() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-300 py-32 mb-3">
        <h1 className="text-3xl max-md:text-xl text-black text-center font-bold">
          Kontak Kami
        </h1>
      </div>
      {/* Main Content Section */}
      <div className="bg-white md:mx-[10%] my-10 shadow-xl md:p-10">
        <div className="flex-col  p-10">
          <div className="flex-col items-center">
            <div className="flex  items-center gap-4">
              <Image src={K1} className="w-[40px] h-[40px]" />
              <h1 className="text-black">+6281343934351</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src={K2} className="w-[40px] h-[40px]" />
              <h1 className="text-black">95254</h1>
            </div>
            <div className="flex  items-center gap-4">
              <Image src={K3} className="w-[40px] h-[40px]" />
              <h1 className="text-black">
                Jalan Raya Wori-Bengkol, Lingkungan 4, Kelurahan Bengkol,
                Kecamatan Mapanget, Manado
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
