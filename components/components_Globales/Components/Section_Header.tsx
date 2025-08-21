"use client";
import Link from "next/link";
import { CiSaveDown2 } from "react-icons/ci";
import LogoPage from "@/../public/img/Group 4.svg";
import Image from "next/image";
import { motion } from "motion/react";
import { RiMenu4Fill } from "react-icons/ri";

export default function Section_Header() {
  
  return (
    <header className="w-full py-10 fixed  justify-center flex  ">
      <motion.section
        animate={{ translateY: 120 }}
        className="flex -translate-y-30 w-[85%] rounded-2xl  items-center b bg-white/80  backdrop-blur-2xl border border-gray-300/40  py-5 px-5  "
      >
        <div className="flex items-center w-1/4  flex-grow">
          <Image className="h-10 w-10" src={LogoPage} alt="" />
        </div>
        <nav className=" md:flex hidden  gap-5 w-1/2 text-sm justify-center">
          <Link
            href={""}
            className="text-gray-700  hover:text-blue-500 transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            href={""}
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Funcionalidades
          </Link>
          <Link
            href={""}
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Beneficios
          </Link>
          <Link
            href={""}
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Contacto
          </Link>
        </nav>
        <div className="md:flex hidden items-center w-1/4 flex-grow justify-end gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <CiSaveDown2 className="text-xl" />
            <span className="text-xs lg:text-lg">Descargar App</span>
          </button>
        </div>
        <div className="md:hidden flex items-center w-1/4 flex-grow justify-end gap-4">
          <button className="bg-blue-600 text-white p-3 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <RiMenu4Fill  className="text-white text-2xl"/>
          </button>
        </div>
      </motion.section>
    </header>
  );
}
