"use client";
import Link from "next/link";
import { CiSaveDown2 } from "react-icons/ci";
import LogoPage from "@/../public/img/Group 4.svg";
import Image from "next/image";
import { motion } from "motion/react";
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Dispatch, SetStateAction } from "react";

export default function Section_Header(Tools: {
  StatusMenu: boolean;
  setStatusMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const { StatusMenu, setStatusMenu } = Tools;

  return (
    <header className="w-full py-5 fixed  justify-center flex flex-col items-center z-50 ">
      <motion.section
        animate={{ translateY: 120 }}
        className={`flex -translate-y-30 w-[90%] ${
          StatusMenu ? "rounded-t-2xl  border-t border-l border-r" : "rounded-2xl  border"
        }  items-center b bg-white/90  backdrop-blur-2xl border-gray-300  py-5 px-5  `}
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
          <button
            onClick={() => {
              setStatusMenu(!StatusMenu);
            }}
            className="bg-blue-600 text-white p-3 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            {StatusMenu ? (
              <IoCloseSharp className="text-white text-2xl" />
            ) : (
              <RiMenu4Fill className="text-white text-2xl" />
            )}
          </button>
        </div>
      </motion.section>
      {StatusMenu && (
        <motion.section
          animate={{ height: 260, opacity: 1 }}
          className="w-[90%] bg-white/90 rounded-b-2xl opacity-0 px-3  backdrop-blur-2xl h-0 border-b border-l border-r border-gray-300 flex flex-col"
        >
          <Link
            href={""}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Inicio</span>
          </Link>
          <Link
            href={""}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Funcionalidades</span>
          </Link>
          <Link
            href={""}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Beneficios</span>
          </Link>
          <Link
            href={""}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Contacto</span>
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <CiSaveDown2 className="text-xl" />
            <span className="text-md">Descargar App</span>
          </button>
        </motion.section>
      )}
    </header>
  );
}
