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
          StatusMenu
            ? "rounded-t-2xl  border-t border-l border-r"
            : "rounded-2xl  border"
        }  items-center b bg-white/90  backdrop-blur-2xl border-gray-300  py-5 px-5  `}
      >
        <div className="flex items-center w-1/4  flex-grow">
          <Image className="h-10 w-10" src={LogoPage} alt="" />
        </div>
        <nav className=" md:flex hidden  gap-5 w-1/2 text-sm justify-center">
          <Link
            href={"#presentacion"}
            className="text-gray-700  hover:text-blue-500 transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            href={"#Funcionalidades"}
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Funcionalidades
          </Link>
          <Link
            href={"#Beneficios"}
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Beneficios
          </Link>
          <Link
            href={"#Equipo"}
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Equipo
          </Link>
          <Link
            href={
              " https://www.instagram.com/diggeapp?igsh=MThrMWVwY3JjYzR0MA%3D%3D&utm_source=qr"
            }
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Instagram-Digge-app
          </Link>
        </nav>
        <div className="md:flex hidden items-center w-1/4 flex-grow justify-end gap-4">
          <Link
            href={"pdf/Presentacion.pdf"}
            download={"PresentacionDigge-app.pdf"}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <CiSaveDown2 className="text-xl" />
            <span className="text-xs lg:text-lg">Descargar presentacion</span>
          </Link>
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
            onClick={() => setStatusMenu(false)}
            href={"#presentacion"}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Inicio</span>
          </Link>
          <Link
            onClick={() => setStatusMenu(false)}
            href={"#Funcionalidades"}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Funcionalidades</span>
          </Link>
          <Link
            onClick={() => setStatusMenu(false)}
            href={"#Beneficios"}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Beneficios</span>
          </Link>
          <Link
            onClick={() => setStatusMenu(false)}
            href={"#Equipo"}
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            <span>Equipo</span>
          </Link>
          <Link
            className="text-gray-700 text-center py-3 text-lg hover:text-blue-500 transition-colors duration-300"
            href={
              " https://www.instagram.com/diggeapp?igsh=MThrMWVwY3JjYzR0MA%3D%3D&utm_source=qr"
            }
          >
            Instagram-Digge-app
          </Link>
          <Link
            onClick={() => setStatusMenu(false)}
            href={"pdf/Presentacion.pdf"}
            download={"PresentacionDigge-app.pdf"}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <CiSaveDown2 className="text-xl" />
            <span className="text-md">Descargar presentacion</span>
          </Link>
        </motion.section>
      )}
    </header>
  );
}
