import Image from "next/image";
import AppReferencia from "@/../public/img/Group 208.svg";
import { CiSaveDown2 } from "react-icons/ci";
import Link from "next/link";

export default function Section_Presentacion() {
  return (
    <section className="flex  flex-wrap  items-center justify-center pb-10 pt-38 md:pt-30 px-5 lg:px-30 gap-5 md:gap-0  bg-white" id="presentacion">
      <div className="flex flex-col gap-4  w-1/2 min-w-80">
        <h2 className="xl:text-7xl text-4xl font-bold">
          DIGGE-App 2025:{" "}
          <span className="text-blue-500">Gestión e Interacción </span>
          <span className="text-green-500">Vial Ciudadana</span>
        </h2>
        <p className="text-lg text-gray-700 font-light">
          Una nueva forma de conectarte con el sistema de tránsito en República
          Dominicana. Gestiona tus vehículos, reporta incidencias y paga
          infracciones de manera transparente.
        </p>
        <div className="flex justify-start">
          <Link
            href={"pdf/Presentacion.pdf"}
            download={"PresentacionDigge-app.pdf"}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <CiSaveDown2 className="text-xl" />
            <span>Descargar presentacion</span>
          </Link>
        </div>
      </div>
      <div className=" w-1/2 min-w-80 flex md:justify-end  justify-center ">
        <Image className="w-[60%] h-[60%]" src={AppReferencia} alt="" />
      </div>
    </section>
  );
}
