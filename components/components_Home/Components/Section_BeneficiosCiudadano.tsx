import Card_Beneficios from "../SubComponents/Card_Beneficios";

export default function Section_BeneficiosCiudadano() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-30 bg-white px-5 md:px-30" id="Beneficios">
      <div className="flex flex-col gap-5  max-w-150 min-w-90">
        <h2 className="text-4xl font-bold text-center ">
          Beneficios para el <span className="text-green-500">Ciudadano</span>
        </h2>
        <p className="md:text-lg text-gray-600 font-light text-center">
          DIGGE-App está diseñada pensando en ti. Descubre cómo mejoramos tu
          experiencia con los servicios viales dominicanos.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center py-10 gap-5">
        <Card_Beneficios />
      </div>
    </section>
  );
}
