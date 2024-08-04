"use client";
import React, { useEffect, useState } from "react";
import { images } from "../../utils/images.js";
import { pelayanan } from "@/utils/pelayanan.js";
import { ibadahMinggu } from "@/utils/ibadahminggu.js";
import { renungan } from "@/utils/renungan.js";
import { pkb } from "@/utils/pkb.js";
import { wki } from "@/utils/wki.js";
import { kolom } from "@/utils/kolom.js";
import { pra } from "@/utils/pra.js";
import { berita } from "@/utils/berita.js";

const User = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return <div>USER</div>;
};

export default User;
