import React from "react";
import BackArrow from "../assets/img/back-arrow.png";
import Link from "next/link";

const ButtonBack = () => {
  return (
    <div>
      <Link href="/pemasukkan">
        <button className="btn bg-pink  p-2 rounded-lg">Kembali</button>
      </Link>
    </div>
  );
};

export default ButtonBack;
