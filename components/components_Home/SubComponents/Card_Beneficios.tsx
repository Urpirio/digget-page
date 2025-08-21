import { Data_CardBeneficios } from "../Data/Data_Beneficios";

export default function Card_Beneficios() {
  const Cards = Data_CardBeneficios.map((item) => (
    <article
      key={item.id}
      className="bg-white p-5 rounded-2xl shadow-xl border border-gray-50 w-1/3 min-w-75 flex gap-3 items-start hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-linear-to-tl from-blue-500 via-blue-500 to-green-500 p-2 rounded-2xl shadow-lg"> 
        {item.icono}
      </div>
      <div>
        <h3 className="text-xl font-semibold"> {item.titulo}</h3>
        <p className="text-gray-600 font-light text-sm">{item.descripcion}</p>
      </div>
    </article>
  ));

  return Cards;
}
