"use client";
import Image from "next/image";
import PhoneModal from "../PhoneModal";
import { useState } from "react";

export default function MobileMenu() {
  const [showModal, setShowModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const handleOpenModal = (src: string) => {
    setImgSrc(src);
    setShowModal(true);
  };

  return (
    <>
      <PhoneModal
        showModal={showModal}
        setShowModal={setShowModal}
        imgSrc={imgSrc}
      />

      <div className="fixed -right-32 bottom-0 left-auto top-[20%] z-30 flex h-[500px] w-52 flex-col space-y-5 md:-right-28">
        <div
          onClick={() => handleOpenModal("phone1.gif")}
          className="group flex h-32 rounded-l-3xl border-[5px] border-black bg-teamdao_green transition-transform duration-200 hover:-translate-x-10 md:h-36"
        >
          <Image
            src="/assets/img/mobile/etf.png"
            alt="Trade"
            width={1080}
            height={1080}
            className="ease -ml-14 h-auto w-full select-none object-contain transition-all duration-200 md:w-full"
            draggable={false}
          />
        </div>

        <div
          onClick={() => handleOpenModal("phone3.gif")}
          className="group flex h-32 rounded-l-3xl border-[5px] border-black bg-teamdao_green transition-transform duration-200 hover:-translate-x-10 md:h-36"
        >
          <Image
            src="/assets/img/mobile/bfs.png"
            alt="Trade"
            width={1080}
            height={1080}
            className="ease -ml-14 h-auto w-full select-none object-contain transition-all duration-200 md:w-full"
            draggable={false}
          />
        </div>

        <div
          onClick={() => handleOpenModal("phone2.gif")}
          className="group flex h-32 rounded-l-3xl border-[5px] border-black bg-teamdao_green transition-transform duration-200 hover:-translate-x-10 md:h-36"
        >
          <Image
            src="/assets/img/mobile/investors.png"
            alt="Trade"
            width={1080}
            height={1080}
            className="ease -ml-14 h-auto w-full select-none object-contain transition-all duration-200 md:w-full"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}
