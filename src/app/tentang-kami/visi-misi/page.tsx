import React from "react";

export default function Page() {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-300 py-32 mb-3">
        <h1 className="text-3xl max-md:text-xl text-black text-center font-bold">
          Visi Misi
        </h1>
      </div>
      {/* <!-- Visi misi --> */}
      <div className="my-[100px]">
        <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[25%]">
          <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 w-auto text-justify font-semibold">
            Visi
          </h1>
          <p className="text-xs sm:text-sm md:text-md lg:text-lg mt-1 text-justify font-semibold">
            “SELALU BERUPAYA MENJADI TERPERCAYA, HANDAL, DAN BERDAYA SAING
            TINGGI DALAM DUNIA BISNIS DENGAN MEMBERIKAN PELAYANAN YANG
            PROFESIONAL DAN BERTANGGUNG JAWAB”
          </p>
        </div>
        <br />
        <br />
        <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[25%]">
          <h1 className="text-sm sm:text-lg lg:text-2xl mt-1 text-justify font-semibold">
            Misi
          </h1>
          <ol className="list-disc text-xs sm:text-sm md:text-md lg:text-lg mt-5 text-justify">
            <li className="mt-2">
              MENGEDEPANKAN PROFESIONALISME DI SETIAP PERJANJIAN KERJA SAMA KAMI
            </li>
            <li className="mt-2">
              MENJAGA DAN MENINGKATKAN KEPUASAN PEKERJAAN KAMI
            </li>
            <li className="mt-2">
              MENJAGA LINGKUNGAN TETAP KONDUSIF DI SETIAP PEKERJAAN YANG KAMI
              LAKUKAN
            </li>
            <li className="mt-2">
              MENJAGA DAN MENINGKATKAN HUBUNGAN KOMUNIKASI YANG RESPONSIF DALAM
              SEGALA PIHAK YANG BERHUBUNGAN DENGAN KAMI DEMI TERCAPAINYA
              KERJASAMA YANG BEKESINAMBUNGAN DAN SALING MENGUNTUNGKAN
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
