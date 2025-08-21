import Image from "next/image";
import ImagenGrupo from "@/../public/img/ImagenGrupo.svg";

export default function Section_Grupo() {
  return (
    <section className="py-10 flex  flex-col justify-center items-center bg-linear-to-tl from-blue-500 via-green-500 to-green-300" id="Equipo">
      <div className="text-center py-5 px-5">
        <h2 className="text-2xl lg:text-4xl font-semibold  text-white">
          Desarrolladores de la{" "}
          <span className="text-blue-600">iniciativa</span>
        </h2>
      </div>
      <div className="flex flex-col justify-between p-3 lg:p-5 border-0  bg-white/20  w-[70%] min-w-80 rounded-3xl shadow-2xl backdrop-blur-2xl">
        <Image className="w-[100%]  rounded-2xl " src={ImagenGrupo} alt="" />
      </div>
    </section>
  );
}
