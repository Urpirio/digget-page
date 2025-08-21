import { IoTimeOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { GoPeople } from "react-icons/go";


export const Data_CardBeneficios = [
  {
    id: 1,
    titulo: "Rapidez en Trámites",
    descripcion:
      "Reduce el tiempo de tus gestiones viales de horas a minutos. Todo desde tu smartphone, sin necesidad de hacer filas.",
    icono: <IoTimeOutline className="text-3xl text-white" />,
  },
  {
    id: 2,
    titulo: "Transparencia Total",
    descripcion:
      "Acceso completo a información sobre procesos, tarifas y estado de trámites. Sin sorpresas, todo claro y detallado.",
    icono: <IoEyeOutline className="text-3xl text-white" />,
  },
  {
    id: 3,
    titulo: "Mayor Seguridad Vial",
    descripcion:
      "Contribuye a un sistema de tránsito más seguro reportando incidencias y accediendo a información actualizada.",
    icono: <AiOutlineSafety className="text-3xl text-white" />,
  },
  {
    id: 4,
    titulo: "Participación Ciudadana",
    descripcion:
      "Forma parte activa del ecosistema vial dominicano. Tu voz importa en la construcción de mejores carreteras.",
    icono: <GoPeople className="text-3xl text-white" />,
  },
];
