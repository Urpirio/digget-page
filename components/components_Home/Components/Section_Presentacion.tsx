import Image from "next/image";
import AppReferencia from "@/../public/img/Group 208.svg";
import { CiSaveDown2 } from "react-icons/ci";

export default function Section_Presentacion() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center pb-10 pt-30 px-30  bg-white">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h2 className="text-7xl font-bold">
          DIGGE-App 2025:{" "}
          <span className="text-blue-500">Gestión e Interacción </span>
          <span className="text-green-500">Vial Ciudadana</span>
        </h2>
        <p className="text-lg text-gray-700 font-light">
          Una nueva forma de conectarte con el sistema de tránsito en República
          Dominicana. Gestiona tus vehículos, reporta incidencias y paga
          infracciones de manera transparente.
        </p>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <CiSaveDown2 className="text-xl" />
            <span>Descargar App</span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
        <Image className="w-[60%] h-[60%]" src={AppReferencia} alt="" />
      </div>
    </section>
  );
}
