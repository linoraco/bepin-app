import React from "react";
import Link from "next/link";
import LogoGmim from "../assets/img/Logo.png";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";

const Header = () => {
  return (
    <>
      <header className="px-[5%] ">
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-yellow-400   mt-3 z-[1] p-2 shadow  rounded-box "
              >
                <li>
                  <Link href="/">BERANDA</Link>
                </li>
                <li>
                  <Link href="/tentang-kami">TENTANG KAMI</Link>
                </li>
                {/* <li>
                  <details>
                    <summary>TENTANG KAMI</summary>
                    <ul className="p-2">
                      <li>
                        <Link href="/user/tentang-kami/gmim">GMIM</Link>
                      </li>
                      <li>
                        <Link href="/user/tentang-kami/musafir">
                          MUSAFIR OHIO
                        </Link>
                      </li>
                      <li>
                        <Link href="/user/tentang-kami/pengakuan-iman">
                          PENGAKUAN IMAN
                        </Link>
                      </li>
                      <li>
                        <Link href="/user/tentang-kami/struktur-gereja">
                          STRUKTUR GEREJA
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li> */}
                <li>
                  <Link href="/kontakkami">KONTAK KAMI</Link>
                </li>
                <li>
                  <details>
                    <summary>GALERI</summary>
                    <ul className="p-2">
                      <li>
                        <Link href="/galeri/photos">PHOTOS</Link>
                      </li>
                      <li>
                        <Link href="/galeri/videos">VIDEOS</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <Link className="flex items-center ml-[-20px]" href="/user">
              <Image src={LogoGmim} className="w-[100px]" />
              <div className=" flex-col ml-[-20px] text-white">
                <h1 className="poppins-bold text-xs sm:text-sm">
                  BEPIN DWIPUTRA COMPANY
                </h1>
                <p className="poppins-regular text-xs sm:text-sm max-sm:hidden">
                  MADKOP GROUP
                </p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden  lg:flex">
            <ul className="menu menu-horizontal border ml-10 text-[14px] bg-yellow-400  poppins-bold text-black  border-stone-500 rounded-2xl px-1  z-[1]">
              <li>
                <Link className="" href="/">
                  BERANDA
                </Link>
              </li>
              {/* <li>
                <Link href="/user">TENTANG KAMI</Link>
              </li> */}
              <li>
                <details>
                  <summary>TENTANG KAMI</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/tentang-kami/profile">PROFILE</Link>
                    </li>
                    <li>
                      <Link href="/tentang-kami/visi-misi">VISI MISI</Link>
                    </li>
                    <li>
                      <Link href="/tentang-kami/jasa-agen">JASA AGEN</Link>
                    </li>
                    <li>
                      <Link href="/tentang-kami/jasa-pelelangan">
                        JASA PELELANGAN
                      </Link>
                    </li>
                    <li>
                      <Link href="/tentang-kami/makelar">MAKELAR</Link>
                    </li>
                    <li>
                      <Link href="/tentang-kami/ekspor-import">
                        EKSPOR IMPORT
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/kontakkami">KONTAK KAMI</Link>
              </li>
              <li>
                <details>
                  <summary>GALERI</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/galeri/photos">PHOTOS</Link>
                    </li>
                    <li>
                      <Link href="/galeri/videos">VIDEOS</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ReactWhatsapp
              className="btn ml-10 hover:bg-green-400 rounded-xl "
              number="+62 81343934351"
            >
              Hubungi Kami
            </ReactWhatsapp>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
