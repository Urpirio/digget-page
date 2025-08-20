import { FiCreditCard } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

export default function Section_Funcionalidades() {
  return (
    <section className="flex flex-col items-center justify-center py-10 bg-white px-5 md:px-30">
      <div className="flex flex-col gap-5 w-1/2 min-w-90 pb-5">
        <h2 className="text-4xl font-bold text-center">
          Funcionalidades <span className="text-blue-500"> Principales</span>
        </h2>
        <p className="text-center text-gray-600 text-lg font-light">
          Descubre cómo DIGGE-App revoluciona la experiencia vial en República
          Dominicana con herramientas innovadoras y fáciles de usar.
        </p>
      </div>
      <div className="w-full flex justify-between py-10 flex-row-reverse">
        <article className="flex flex-col w-1/5 justify-center gap-2 hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center">
            <div className="border-2 rounded-2xl  bg-red-50 shadow-2xl border-red-200 p-4 flex items-center justify-center h-15 w-15 mb-4">
              <IoWarningOutline className="text-4xl text-red-600" />
            </div>
            <h4 className="text-lg text-red-600 font-semibold">
              Reporte de Incidencias
            </h4>
          </div>
          <p className="text-gray-600 text-center text-[13px]  font-light">
            Un sistema para que los ciudadanos denuncien malas prácticas en la
            gestión vial y reporten averías en carreteras, semáforos y otras
            infraestructuras.
          </p>
        </article>

        <article className="flex flex-col w-1/5 justify-center gap-2 hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center">
            <div className="border-2 rounded-2xl  bg-green-50 shadow-2xl border-green-200 p-4 flex items-center justify-center h-15 w-15 mb-4">
              <FiCreditCard className="text-4xl text-green-500" />
            </div>
            <h4 className="text-lg text-green-500 font-semibold">
              Pago de Infracciones
            </h4>
          </div>
          <p className="text-gray-600 text-center text-[13px]  font-light">
            Un sistema de monitoreo vehicular continuo que permite renovar
            marbete, licencia y reportar vehículos robados o extraviados.
          </p>
        </article>

        <article className="flex flex-col w-1/5 justify-center gap-2 hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center">
            <div className="border-2 rounded-2xl  bg-blue-100 shadow-2xl border-blue-200 p-4 flex items-center justify-center h-15 w-15 mb-4">
              <LuBrainCircuit className="text-3xl text-blue-500" />
            </div>
            <h4 className="text-lg text-blue-500 font-semibold">DiggeAgente</h4>
          </div>
          <p className="text-gray-600 text-center text-[13px] font-light">
            Un agente con IA que ofrece información detallada y actualizada
            sobre las instituciones de gestión vial en RD, con opciones de
            contacto directo y asistencia personalizada.
          </p>
        </article>

        <article className="flex flex-col w-1/5 justify-center gap-2 hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center">
            <div className="border-2 rounded-2xl  bg-amber-50 shadow-2xl border-amber-200 p-4 flex items-center justify-center h-15 w-15 mb-4">
              <FaMapMarkedAlt className="text-4xl text-amber-500" />
            </div>
            <h4 className="text-lg font-semibold text-amber-500 ">DiggeMap</h4>
          </div>
          <p className="text-gray-600 text-center text-[13px]  font-light">
            Un sistema para que los ciudadanos denuncien malas prácticas en la
            gestión vial y reporten averías en carreteras, semáforos y otras
            infraestructuras.
          </p>
        </article>
      </div>
    </section>
  );
}
