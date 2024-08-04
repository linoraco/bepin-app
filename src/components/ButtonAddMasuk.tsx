import React from "react";
import BackArrow from "../assets/img/back-arrow.png";
import Link from "next/link";

const ButtonAddMasuk = () => {
  return (
    <div>
      <Link href="/">
        <button className="btn bg-pink  py-1 px-3 rounded-lg">+</button>
      </Link>
    </div>
  );
};

export default ButtonAddMasuk;
