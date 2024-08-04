"use client";
import React, { useEffect, useState } from "react";
import { images } from "@/utils/images.js";
import { pelayanan } from "@/utils/pelayanan.js";
import { ibadahMinggu } from "@/utils/ibadahminggu.js";
import { renungan } from "@/utils/renungan.js";
import { pkb } from "@/utils/pkb.js";
import { wki } from "@/utils/wki.js";
import { kolom } from "@/utils/kolom.js";
import { pra } from "@/utils/pra.js";
import { berita } from "@/utils/berita.js";
import Logo from "../assets/img/LogoTulisan.png";
import LogoT from "../assets/img/LogoT.png";
import Image from "next/image";
import P1 from "../assets/img/Picture1.png";
import P2 from "../assets/img/Picture2.png";
import P3 from "../assets/img/Picture7.png";
import ReactWhatsapp from "react-whatsapp";
import { videos } from "@/utils/videos.js";
import ReactPlayer from "react-player";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fungsi untuk berpindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Mengatur interval untuk pergantian slide otomatis
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // 5000 ms = 5 detik

    // Bersihkan interval saat komponen unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className="2xl:mx-[10%] relative">
        {" "}
        <div className="poppins-bold z-0 animate-fade-in">
          <div className="w-full h-[180px] min-[320px]:h-[200px] min-[350px]:h-[220px] min-[400px]:h-[240px] min-[430px]:h-[250px] min-[500px]:h-[270px] min-[580px]:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[470px] min-[1080px]:h-[570px] min-[1100px]:h-[600px] xl:h-[650px] min-[1480px]:h-[750px] 2xl:h-[850px]   relative overflow-hidden  ">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover", // Memastikan gambar menutupi seluruh elemen
                  backgroundPosition: "center", // Memastikan gambar berada di tengah elemen
                  backgroundRepeat: "no-repeat", // Mencegah gambar diulang
                  minHeight: "100%", // Memastikan tinggi minimum
                }}
              >
                {/* Optional overlay */}
                <div className=""></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col items-center justify-center animate-slide-in-down -translate-y-5 relative bg-yellow-300 pb-5 lg:pb-0  rounded-t-[100px] md:rounded-[100px] text-black shadow-xl  lg:mx-[10%] min-[1500px]:mx-[15%] min-[2000px]:mx-[20%]">
          <div className="lg:flex lg:p-[5%] lg:py-[10%]">
            {" "}
            <div className="flex justify-center lg:flex-none animate-slide-in-left">
              <Image
                className="w-[250px] mt-[-50px] lg:mt-0 lg:w-[280px]"
                src={Logo}
                alt=""
              />
            </div>
            <div className="mx-[5%] mt-[-50px] lg:mt-0 animate-slide-in-right">
              <h1 className="poppins-semibold text-lg lg:text-2xl">
                Usaha apa si Bepin Dwiputra?
              </h1>
              <p className="my-2 poppins-regular text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam aperiam totam omnis hic ipsa? Vitae sint facere atque
                facilis dolorem fugit ipsa vero ex, minima voluptate quidem quas
                quo nam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quae saepe, magnam delectus et id laboriosam a ea harum
                quibusdam neque reiciendis iste quidem aliquam earum, explicabo
                facilis veniam dolorem quasi!
              </p>
              <p className="my-2 poppins-regular text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam aperiam totam omnis hic ipsa? Vitae sint facere atque
                facilis dolorem fugit ipsa vero ex, minima voluptate quidem quas
                quo nam?
              </p>
              <p className="my-2 poppins-regular text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam aperiam totam omnis hic ipsa? Vitae sint facere atque
                facilis dolorem fugit ipsa vero ex, minima voluptate quidem quas
                quo nam?
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white text-black">
          <div className="flex justify-between lg:mx-[10%] bg-white p-5 lg:px-10 ">
            <div className="flex-col animate-slide-in-left">
              <div>
                <Image className="w-[250px] mt-[-50px]" src={Logo}></Image>
              </div>
              <div className="">
                <h1 className="text-4xl lg:text-6xl poppins-bold">
                  Cakupan Usaha
                </h1>
                <ul className="poppins-medium lg:text-xl my-10">
                  <li>1.Jasa Agen</li>
                  <li>2.Makelar</li>
                  <li>3.Jasa Pelelangan</li>
                  <li>4.Ekspor Import</li>
                </ul>
              </div>
            </div>
            <div className="hidden  animate-bounce  w-[500px] h-[500px] lg:flex lg:mr-[-1000px] ">
              <Image className="" src={P1}></Image>
            </div>
            <div className="w-[400px] animate-slide-in-down mt-[100px] lg:mt-[300px] lg:mr-[350px]">
              <Image className="" src={P2}></Image>
            </div>
          </div>
        </div>
        <div className="lg:mx-[10%]   text-black min-[1500px]:mx-[15%] min-[2000px]:mx-[20%] my-[10%]">
          <h1 className="text-white poppins-bold text-center text-xl md:text-3xl lg:text-5xl">
            Barang Dagang
          </h1>
          <div className="overflow-x-auto text-white">
            <table className="table">
              <thead>
                <tr className="text-white">
                  <th>No</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Bahan baku pertanian",
                  "Binatang hidup",
                  "Bahan baku tekstil dan barang setengah jadi",
                  "Bahan bakar",
                  "Bijih-bijihan",
                  "Logam dan industri kimia",
                  "Pupuk",
                  "Makanan",
                  "Minuman",
                  "Tembakau",
                  "Tekstil",
                  "Pakaian",
                  "Bulu",
                  "Alas kaki dan barang dari kulit",
                  "Kayu-kayuan dan bahan bangunan",
                  "Mesin",
                  "Mesin kantor dan komputer",
                  "Perlengkapan industri",
                  "Kapal",
                  "Pesawat",
                  "Furnitur",
                  "Barang keperluan rumah tangga dan perangkat keras",
                  "Kegiatan perdagangan besar rumah pelelangan",
                  "Agen komisi zat radioaktif dan pembangkit radiasi pengion",
                  "Angkutan barang dengan kendaraan bermotor dan dapat mengangkut lebih dari satu jenis barang",
                ].map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "" : "hover hover:text-black"}
                  >
                    <th>{index + 1}</th>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ReactWhatsapp
            number="+62 813439343512"
            className=" flex rounded-xl my-10 hover:font-semibold hover:bg-green-400 hover:-translate-y-3 duration-500 p-4 bg-green-500"
          >
            Hubungi Kami Untuk Informasi Lebih Detail
          </ReactWhatsapp>
        </div>
        <div className="w-full bg-black pt-28 lg:pt-0 shadow-xl">
          <div className="flex-col items-center justify-center animate-slide-in-down -translate-y-5 relative  pb-5 lg:pb-0 lg:mb-[100px]    text-black    min-[1500px]:mx-[10%] min-[2000px]:mx-[15%]">
            <div className="lg:flex lg:p-[5%] lg:pt-[10%]  lg:mb-[-100px]">
              {" "}
              <div className="mx-[5%] mt-[-50px] text-white lg:mt-0 animate-slide-in-right">
                <h1 className="poppins-bold text-lg lg:text-5xl">
                  Nilai-Nilai Kami
                </h1>
                <div className="my-10">
                  <h1 className="text-xl poppins-semibold text-yellow-300 ">
                    INTEGRITAS
                  </h1>
                  <p className=" poppins-regular text-justify">
                    Integritas merupakan landasan budaya perusahaan kami. Kami
                    percaya bahwa menjaga keutuhan dan kesatuan perusahaan, maka
                    kejujuran dan kualitas pelayanan kami berada pada standar
                    tertinggi.
                  </p>
                </div>
                <div className="my-10">
                  <h1 className="text-xl poppins-semibold text-yellow-300">
                    KREDIBILITAS
                  </h1>
                  <p className=" poppins-regular text-justify">
                    Kredibilitas perusahaan kami terefleksi dari kepercayaan
                    klien kami terhadap layanan dan jasa yang kami sediakan.
                    Kami pastikan klien dan stakeholder perusahaan mendapatkan
                    hasil yang terbaik.
                  </p>
                </div>
                <div className="my-10">
                  <h1 className="text-xl poppins-semibold text-yellow-300">
                    PROFESIONALITAS
                  </h1>
                  <p className=" poppins-regular text-justify">
                    Profesionalitas adalah inti dari perusahaan kami. Kami
                    menjujung tinggi hubungan profesional dengan klien dan
                    pelayanan yang berkualitas.
                  </p>
                </div>
              </div>
              <div className="mx-[10%] animate-pulse sm:mx-[20%] md:mx-[30%] lg:mx-0 ">
                <Image src={P3}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-[10%]">
          <h1 className="text-white text-center p-2 poppins-bold md:text-2xl lg:text-4xl mb-10  rounded-lg ">
            GALERI
          </h1>
          <div>
            <h1 className="lg:text-2xl my-10 bg-yellow-400 w-[200px] text-center p-2 rounded-tl-3xl rounded-br-3xl text-black">
              Videos
            </h1>
            <div className="grid  grid-cols-1   min-[570px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  place-items-center gap-3">
              {videos
                .filter((video) => video.id >= 1 && video.id <= 6)
                .map((video) => (
                  <div
                    key={video.id}
                    className="flex flex-col items-center justify-center mb-4"
                  >
                    <ReactPlayer
                      url={video.url}
                      controls
                      width="100%"
                      height="100%"
                    />
                    <p>{video.alt}</p>
                  </div>
                ))}
            </div>
            <div className="bg-yellow-400 hover:bg-yellow-300 hover:font-semibold hover:-translate-y-1 duration-500 my-5 flex justify-center items-center mx-auto w-[200px] p-2 text-black rounded-2xl">
              <Link href={"/galeri/videos"}>See All Videos</Link>
            </div>
          </div>
          <div className="">
            <h1 className="lg:text-2xl my-10 bg-yellow-400 w-[200px] text-center p-2 rounded-tl-3xl rounded-br-3xl text-black">
              Photos
            </h1>
            <div className="grid  grid-cols-1   min-[570px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  place-items-center gap-3">
              {images
                .filter((image) => image.id >= 1 && image.id <= 6)
                .map((image) => (
                  <div
                    key={image.id}
                    className="flex flex-col items-center justify-center mb-4"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                    <p>{image.alt}</p>
                  </div>
                ))}
            </div>
            <div className="bg-yellow-400 hover:bg-yellow-300 hover:-translate-y-1 hover:font-semibold  duration-500 my-5 flex justify-center items-center mx-auto w-[200px] p-2 text-black rounded-2xl">
              <Link href={"/galeri/photos"}>See All Photos</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
